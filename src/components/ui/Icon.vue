<script setup lang="ts">
  import { Icon } from '@iconify/vue'

  interface Props {
    icon?: string
  }

  const props = withDefaults(defineProps<Props>(), {
    icon: 'mdi:home'
  })
</script>

<template>
  <Icon :icon="props.icon" />
</template>

<style lang="scss" scoped>
</style>