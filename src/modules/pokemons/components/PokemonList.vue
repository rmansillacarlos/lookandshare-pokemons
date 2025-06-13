<script setup lang="ts">
  import { useRouter } from 'vue-router'
  import type { PokemonItem as PokemonItemType } from '@/modules/pokemons/types/pokemon'
  import PokemonItem from '@/modules/pokemons/components/PokemonItem.vue'

  interface Props {
    pokemons: PokemonItemType[]
  }

  const router = useRouter()

  const props = defineProps<Props>()
</script>

<template>
  <ul class="flex flex-col gap-2">
    <a
      v-for="pokemon in props.pokemons"
      :key="pokemon.name"
      class="cursor-pointer"
      @click="router.push({ path: `/pokemons/all/${pokemon.name}` })"
    >
      <PokemonItem
        :name="pokemon.name"
        :favorite="pokemon.favorite"
        >
        {{ pokemon.name }}
      </PokemonItem>
    </a>
  </ul>
</template>