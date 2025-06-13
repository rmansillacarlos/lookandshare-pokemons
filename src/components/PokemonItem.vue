<script setup lang="ts">
  import ListItem from '@/components/ui/ListItem.vue'
  import Icon from '@/components/ui/IconUI.vue'
  import { usePokemonStore } from '@/stores/pokemonStore'

  interface Props {
    name: string
    favorite?: boolean
  }

  const { addOrRemoveFavorite } = usePokemonStore()
  
  const props = defineProps<Props>()
</script>

<template>
  <ListItem>
    <div class="w-full flex justify-between items-center capitalize">
      {{ props.name }}

      <button class="p-1 rounded-full cursor-pointer hover:bg-gray-100" @click.stop.prevent="addOrRemoveFavorite(props.name)">
        <Icon
          icon="mdi:star"
          :class="['text-xl', favorite ? 'text-amber-400' : 'text-gray-300']"
        />
      </button>
    </div>
  </ListItem>
</template>