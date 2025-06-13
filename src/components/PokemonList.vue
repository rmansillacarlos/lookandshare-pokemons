<script setup lang="ts">
  import { useRoute } from 'vue-router'
  import InputText from '@/components/ui/InputText.vue'
  import PokemonItem from '@/components/PokemonItem.vue'
  import type { PokemonItem as PokemonItemType } from '@/types/pokemon'

  interface Props {
    pokemons: PokemonItemType
  }

  const route = useRoute()

  const props = defineProps<Props>()
</script>

<template>
  <main class="mt-8 w-[320px] md:w-[570px]">
    <InputText
      class="mb-10"
      placeholder="Search"
      @input="e => pokemons(e)"
    />
    <ul class="flex flex-col gap-2">
      <RouterLink
        v-for="pokemon in props.pokemons"
        :key="pokemon.name"
        :to="`${route.path}/${pokemon.name}`"
      >
        <PokemonItem
          :name="pokemon.name"
          :favorite="pokemon.favorite"
        >
          {{ pokemon.name }}
        </PokemonItem>
      </RouterLink>
    </ul>
  </main>
</template>