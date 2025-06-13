<script setup lang="ts">
  import { computed, watch } from 'vue'
  import { storeToRefs } from 'pinia'
  import usePokemons from '@/composables/usePokemons'
  import { usePokemonStore } from '@/stores/pokemon.store'
  import PokemonList from '@/components/PokemonList.vue'
  import NotFoundStatus from '@/components/NotFoundStatus.vue'

  const pokemonStore = usePokemonStore()
  const { searchNotFound } = storeToRefs(pokemonStore)
  const { fetchPokemons } = usePokemons()

  const pokemons = computed(() => (pokemonStore.pokemonsWithFav))

  fetchPokemons()
  pokemonStore.loadFromStorage()
</script>

<template>
  <PokemonList v-if="!searchNotFound" :pokemons="pokemons" />
  <NotFoundStatus v-else />
  <!-- detail modal -->
  <router-view />
</template>