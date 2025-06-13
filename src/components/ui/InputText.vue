<script setup lang="ts">
  import IconUI from '@/components/ui/IconUI.vue'

  interface Props {
    placeholder?: string
  }

  const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
  }>()

  const props = defineProps<Props>()
</script>

<template>
  <div class="p-2.5 flex gap-2 place-items-center bg-white rounded-md shadow-lg shadow-slate-200">
    <IconUI
      icon="mdi:magnify"
      class="ml-1 text-2xl text-gray-400" 
    />
    <input
      class="w-full focus:outline-0" 
      type="text" 
      :placeholder="props.placeholder" 
      @input="(e: Event) => emit('update:modelValue', e.target.value)"
    >
  </div>
</template>

<style scoped>

</style>