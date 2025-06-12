import { ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
  const loading: Ref<boolean> = ref(false)

  function setLoading(value: boolean): void {
    loading.value = value
  }

  return { loading, setLoading }
})
