<script setup lang="ts">
  interface Props {
    placeholder?: string
  }

  const emit = defineEmits(['input'])

  const props = defineProps<Props>()
</script>

<template>
  <div class="p-2 bg-white rounded-md shadow-lg shadow-slate-200">
    <input class="w-full focus:outline-0" type="text" :placeholder="props.placeholder" @input="e => emit('input', e)">
  </div>
</template>

<style scoped>

</style>