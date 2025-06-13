<script setup lang="ts">
  import { computed, onMounted } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { useScrollLock } from '@/composables/useScrollLock'
  import usePokemonDetail from '@/composables/usePokemonDetail'
  import PokemonStat from '@/components/PokemonProp.vue'
  import Button from '@/components/ui/Button.vue'
  import Icon from '@/components/ui/Icon.vue'

  const route = useRoute()
  const router = useRouter()
  const selectedPokemonName = Array.isArray(route.params.name) ? route.params.name[0] : route.params.name

  const { pokemonDetail, refetch } = usePokemonDetail(selectedPokemonName)

  const getPokemonDetail = async () => {
    await refetch()
  }

  const pokemonProps = computed(() => {
    if (pokemonDetail.value) {
      const { img, ...propertiesWithoutImg } = pokemonDetail.value
      return pokemonDetail.value && Object.entries(propertiesWithoutImg)
    }
  })

  const pokemonImage = computed(() => {
    return pokemonDetail.value && pokemonDetail.value.img
  })

  useScrollLock()

  onMounted(async () => {
    await getPokemonDetail()
  })
</script>

<template>
  <!-- background -->
  <div class="fixed overflow-auto w-screen h-screen left-0 top-0 z-30 bg-slate-800/50 pointer-events-none" />
  <!-- modal -->
  <div class="fixed z-40 bg-white w-[560px] rounded-md">
    <!-- close button -->
    <div class="absolute right-0 z-30 p-3">
      <button class="p-1 bg-white rounded-full cursor-pointer" @click="router.back()">
        <Icon icon="mdi:close" class="text-xl" />
      </button>
    </div>
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
          :property="stat[0]"
          :value="stat[1]"
        />
      </ul>
      <div class="mt-6 flex justify-between items-center">
        <Button>Share to my friends</Button>
        <button class="p-1 rounded-full cursor-pointer hover:bg-gray-100">
          <Icon
            icon="mdi:star"
            :class="['text-3xl', true ? 'text-amber-400' : 'text-gray-300']"
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