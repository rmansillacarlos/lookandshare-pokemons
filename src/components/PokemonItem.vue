<script setup lang="ts">
  import { RouterLink } from 'vue-router'
  import ListItem from '@/components/ui/ListItem.vue'
  import type { Pokemon } from '@/types/pokemon'
  import Icon from './ui/Icon.vue'

  interface Props {
    name: string
    favorite?: boolean
  }

  const props = defineProps<Props>()
</script>

<template>
  <RouterLink :to="`pokemon/${props.name}`">
    <ListItem>
      <div class="w-full flex justify-between items-center capitalize">
        {{ props.name }}

        <button class="p-1 rounded-full cursor-pointer hover:bg-gray-100">
          <Icon
            icon="mdi:star"
            :class="['text-xl', favorite ? 'text-amber-400' : 'text-gray-300']"
          />
        </button>
      </div>
    </ListItem>
  </RouterLink>
</template>


<style lang="scss" scoped>

</style>