<script setup lang="ts">
import Button from '@/components/ui/ButtonUI.vue'
import IconUI from '../ui/IconUI.vue'

interface Props {
  path: string
  icon: string
  active: boolean
}

const props = defineProps<Props>()
</script>

<template>
  <router-link :to="props.path">
    <Button
      :variant="!props.active ? 'secondary' : undefined"
      class="w-[275px] flex gap-2 justify-center items-center"
     >
      <IconUI :icon="props.icon" class="text-2xl" />
      <slot />
    </Button>
  </router-link>
</template>