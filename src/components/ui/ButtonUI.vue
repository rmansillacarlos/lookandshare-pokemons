<script setup lang="ts">
   
  type ButtonVariants = 'primary' | 'secondary'

  interface Props {
    variant?: ButtonVariants
  }

  const variantClasses: Record<ButtonVariants, string> = {
    primary: 'bg-red-600 text-white active:bg-red-700',
    secondary: 'bg-gray-400 text-white'
  }

  const props = withDefaults(defineProps<Props>(), {
    variant: 'primary'
  })
</script>

<template>
  <button
    :class="[
      'px-5 py-2 rounded-4xl cursor-pointer',
      variantClasses[props.variant]
    ]"
  >
    <slot />
  </button>
</template>

<style scoped>
</style>