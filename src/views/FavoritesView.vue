<script setup lang="ts">
  import { computed } from 'vue'
  import { storeToRefs } from 'pinia'
  import { useRoute } from 'vue-router'
  import { usePokemonStore } from '@/stores/pokemon.store'
  import PokemonList from '@/components/PokemonList.vue'
  import PokemonModal from '@/components/PokemonModal.vue'
  import NotFoundStatus from '@/components/NotFoundStatus.vue'
  import usePokemons from '@/composables/usePokemons'

  const route = useRoute()

  const pokemonStore = usePokemonStore()
  const { searchNotFound } = storeToRefs(pokemonStore)

  const { closeModal } = usePokemons()

  const favoritePokemons = computed(() => (pokemonStore.favoritePokemons))
  pokemonStore.loadFromStorage()
</script>

<template>
  <PokemonList v-if="!searchNotFound" :pokemons="favoritePokemons" />
  <NotFoundStatus v-else />
  <PokemonModal v-if="route.params.name" @close="closeModal" />
</template>