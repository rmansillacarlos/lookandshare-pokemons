<script setup lang="ts">
  interface Props {
    property: string
    value: string | number | string[]
  }

  const props = defineProps<Props>()
</script>

<template>
   <li class="py-3 flex gap-2 text-gray-500 border-b border-b-gray-200 capitalize">
    <b>{{ props.property }}:</b>
    <span>{{ !Array.isArray(props.value) ? props.value : props.value.join(', ') }}</span>
  </li>
</template>