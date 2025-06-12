<script setup lang="ts">
import Button from '@/components/ui/Button.vue'

interface Props {
  path: string
}

const props = defineProps<Props>()
</script>

<template>
  <router-link :to="props.path">
    <Button>
      <slot />
    </Button>
  </router-link>
</template>