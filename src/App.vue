<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import { useAppStore } from '@/stores/app'
  import { storeToRefs } from 'pinia'
  import LoadingView from '@/views/LoadingView.vue'

  const appStore = useAppStore()
  const { loading } = storeToRefs(appStore)
</script>

<template>
  <LoadingView :show="loading" />
  <RouterView />
</template>

<style scoped>

</style>
