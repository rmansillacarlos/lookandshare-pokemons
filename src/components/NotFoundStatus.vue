<script setup lang="ts">
  import { usePokemonStore } from '@/modules/pokemons/store/pokemon.store'
  import ButtonUI from '@/components/ui/ButtonUI.vue'
  
  const pokemonStore = usePokemonStore()
</script>

<template>
  <div class="flex flex-col items-center mt-16">
    <h1 class="my-0 text-2xl font-bold">Uh-oh</h1>
    <p class="mb-6">You look lost on your journey!</p>
    <ButtonUI
      @click="pokemonStore.reset()"
    >
      Go back home
    </ButtonUI>
  </div>
</template>

<style scoped>

</style>