<script setup lang="ts">
  interface Props {
    show: boolean
  }

  const props = defineProps<Props>()
</script>

<template>
  <div
    class="fixed left-0 w-screen h-screen flex justify-center place-items-center z-100"
    :class="['transition-opacity', props.show ? 'block opacity-100' : 'hidden opacity-0']"
  >
    <img
      src="@/assets/img/loader.svg"
      alt="Loading Global Pokemons"
      class="relative z-80 animate-pulse"
    >
    <div class="absolute inset-0 overflow-auto w-screen h-screen left-0 top-0 z-60 bg-white select-none" />
  </div>
</template>

<style scoped>
  main {
    display: flex;
    place-items: center;
    height: 100vh;
  }
</style>