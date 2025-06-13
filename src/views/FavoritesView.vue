<script setup lang="ts">
  import { computed } from 'vue'
  import { storeToRefs } from 'pinia'
  import useSearchPokemon from '@/composables/useSearchPokemon.ts'
  import { usePokemonStore } from '@/stores/pokemon.store'
  import PokemonList from '@/components/PokemonList.vue'
  import NotFoundStatus from '@/components/NotFoundStatus.vue'

  const pokemonStore = usePokemonStore()
  const { searchText, searchNotFound } = storeToRefs(pokemonStore)

  const favoritePokemons = computed(() => (pokemonStore.favoritePokemons))
  pokemonStore.loadFromStorage()
</script>

<template>
  <PokemonList v-if="!searchNotFound" :pokemons="favoritePokemons" />
  <NotFoundStatus v-else />
  <!-- detail modal -->
  <router-view />
</template>