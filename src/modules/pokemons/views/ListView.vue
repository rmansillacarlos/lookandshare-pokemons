<script setup lang="ts">
  import { computed, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  import { storeToRefs } from 'pinia'
  import usePokemons from '@/modules/pokemons/composables/usePokemons'
  import { usePokemonStore } from '@/modules/pokemons/store/pokemon.store'
  import PokemonModal from '@/modules/pokemons/components/PokemonModal.vue'
  import PokemonList from '@/modules/pokemons/components/PokemonList.vue'
  import NotFoundStatus from '@/components/NotFoundStatus.vue'

  const pokemonStore = usePokemonStore()

  const route = useRoute()

  const { searchNotFound } = storeToRefs(pokemonStore)
  const { fetchPokemons, closeModal } = usePokemons()

  const pokemons = computed(() => (pokemonStore.pokemonsWithFav))

  pokemonStore.loadFromStorage()

  onMounted(async () => {
    await fetchPokemons()
  })
</script>

<template>
  <PokemonList v-if="!searchNotFound" :pokemons="pokemons" />
  <NotFoundStatus v-else />
  <PokemonModal v-if="route.params.name" @close="closeModal" />
</template>