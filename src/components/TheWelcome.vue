<script setup lang="ts">
  import { useRouter } from 'vue-router'
  import Button from '@/components/ui/ButtonUI.vue'

  const router = useRouter()
</script>

<template>
  <main class="h-screen p-6 flex flex-col justify-center items-center text-center">
    <div class="mx-auto mb-[60px]">
      <img src="@/assets/img/welcome.svg" alt="Global Pokemon Welcome">
    </div>
    <h1 class="mb-8 font-bold text-2xl">
      Welcome to Pokédex
    </h1>
    <p class="mb-12">
      The digital encyclopedia created by Professor Oak is an invaluable tool <br> to Trainers in the Pokémon world.
    </p>
    <div class="grid place-items-center">
      <Button @click="router.push('pokemons/all')">
        Get started
      </Button>
    </div>
  </main>
</template>