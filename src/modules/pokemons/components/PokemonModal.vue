<script setup lang="ts">
  import { computed, onMounted, onUnmounted } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { useScrollLock } from '@/composables/useScrollLock'
  import usePokemonDetail from '@/modules/pokemons/composables/usePokemonDetail'
  import { usePokemonStore } from '@/modules/pokemons/store/pokemon.store'
  import PokemonStat from '@/modules/pokemons/components/PokemonProp.vue'
  import Button from '@/components/ui/ButtonUI.vue'
  import Icon from '@/components/ui/IconUI.vue'
  import { storeToRefs } from 'pinia'

  const route = useRoute()
  const router = useRouter()
  const selectedPokemonName = Array.isArray(route.params.name) ? route.params.name[0] : route.params.name

  const { getPokemonDetail } = usePokemonDetail(selectedPokemonName)
  const pokemonStore = usePokemonStore()
  const { pokemonDetail } = storeToRefs(pokemonStore)

  const pokemonProps = computed(() => {
    let pokemonValues
    if (pokemonDetail.value) {
      const propertiesWithoutImg = { ...pokemonDetail.value }
      delete propertiesWithoutImg.img
      delete propertiesWithoutImg.favorite
      pokemonValues = pokemonDetail.value && Object.entries(propertiesWithoutImg)
    }
    return pokemonValues
  })

  const pokemonImage = computed(() => {
    return pokemonDetail.value && pokemonDetail.value.img
  })

  const isFavorite = computed(() => {
    return pokemonDetail.value.favorite
  })

  useScrollLock()

  onMounted(async () => {
    await getPokemonDetail()
  })

  onUnmounted(() => {
    pokemonStore.resetPokemonDetail()
  })
</script>

<template>
  <!-- background -->
  <div class="fixed inset-0 overflow-auto w-screen h-screen left-0 top-0 z-60 bg-slate-800/50 select-none" />
  <!-- modal -->
  <div class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-80 w-[340px] bg-white max-w-[360px] rounded-md md:min-w-[560px]">
    <!-- close button -->
    <button class="absolute right-0 m-3 p-1 z-60 bg-white rounded-full cursor-pointer" @click="router.back()">
      <Icon icon="mdi:close" class="text-xl" />
    </button>
    <div class="relative">
      <img
        src="@/assets/img/bg-pokemon.png"
        class="bg rounded-t-md"
      >
      <img
        :src="pokemonImage"
        class="pokemon"
      >
    </div>
    <div class="p-6 pt-2">
      <ul>
        <PokemonStat
          v-for="stat in pokemonProps"
          :key="stat[0]"
          :property="stat[0]"
          :value="stat[1]"
        />
      </ul>
      <div class="mt-6 flex justify-between items-center">
        <Button>Share to my friends</Button>
        <button
          class="p-1 rounded-full cursor-pointer hover:bg-gray-100"
          @click="pokemonStore.addOrRemoveFavorite(pokemonDetail.name)"
        >
          <Icon
            icon="mdi:star"
            :class="['text-3xl', isFavorite ? 'text-amber-400' : 'text-gray-300']"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
img.bg {
  height: 220px;
  position: absolute;
  object-fit: cover;
}

img.pokemon {
  height: 220px;
  position: relative;
  object-fit: cover;
  margin: auto;
}
</style>