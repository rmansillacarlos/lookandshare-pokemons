<script setup lang="ts">
  import PokemonList from '@/components/PokemonList.vue'
  import usePokemons from '@/composables/usePokemons'

  const { pokemons } = usePokemons()
</script>

<template>
  <PokemonList :pokemons="pokemons" />
  <!-- detail modal -->
  <router-view />
</template>