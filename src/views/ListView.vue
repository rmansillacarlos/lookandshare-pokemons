<script setup lang="ts">
  import InputText from '@/components/ui/InputText.vue'
  import PokemonItem from '@/components/PokemonItem.vue'
  import usePokemons from '@/composables/usePokemons'

  const { pokemons } = usePokemons()
</script>

<template>
  <main class="mt-8 w-96">
    <div>
      <InputText class="mb-10" placeholder="Search" @input="e => pokemons(e)"/>
      
      <ul class="flex flex-col gap-2">
        <PokemonItem
          v-for="pokemon in pokemons"
          :name="pokemon.name"
          :url="pokemon.url"
        >
          {{ pokemon.name }}
        </PokemonItem>
      </ul>
    </div>
  </main>
</template>

<style>
</style>