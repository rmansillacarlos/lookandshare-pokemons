<script setup>
  import Button from '@/components/ui/Button.vue'
  import { useRouter } from 'vue-router'

  const router = useRouter()
</script>

<template>
  <img src="@/assets/welcome.svg" alt="" sizes="" srcset="">
  <h1>
    Welcome to Pokédex
  </h1>
  <p>
    The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokémon world.
  </p>
  <div>
    <Button @click="router.replace('home')">
      Get started
    </Button>
  </div>
</template>

<style>
</style>