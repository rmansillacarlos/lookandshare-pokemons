<script setup lang="ts">
import Button from '@/components/ui/ButtonUI.vue'

interface Props {
  path: string
  active: boolean
}

const props = defineProps<Props>()
</script>

<template>
  <router-link :to="props.path">
    <Button
      :variant="!props.active ? 'secondary' : undefined"
      class="w-[275px]"
     >
      <slot />
    </Button>
  </router-link>
</template>