<script setup lang="ts">
  import usePokemons from '@/composables/usePokemons'
  import { usePokemonStore } from '@/stores/pokemon.store'
  import PokemonList from '@/components/PokemonList.vue'
import { computed } from 'vue'

  const { fetchPokemons } = usePokemons()
  const pokemonStore = usePokemonStore()

  const pokemons = computed(() => (pokemonStore.pokemonsWithFav))

  fetchPokemons()
  pokemonStore.loadFromStorage()
</script>

<template>
  <PokemonList :pokemons="pokemons" />
  <!-- detail modal -->
  <router-view />
</template>