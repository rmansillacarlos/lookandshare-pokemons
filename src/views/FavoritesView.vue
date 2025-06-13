<script setup lang="ts">
  import PokemonList from '@/components/PokemonList.vue'
  import { usePokemonStore } from '@/stores/pokemonStore'
  import { computed } from 'vue'

  const pokemonStore = usePokemonStore()

  const favoritePokemons = computed(() => (pokemonStore.favoritePokemons))
  pokemonStore.loadFromStorage()
</script>

<template>
  <PokemonList :pokemons="favoritePokemons" />
  <!-- detail modal -->
  <router-view />
</template>