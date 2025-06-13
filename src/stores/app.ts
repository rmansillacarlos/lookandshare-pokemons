import { ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
   state: () => ({
    loading: false as boolean
  }),
  actions: {
    setLoading(value: boolean) {
      this.loading = value
    }
  }
})
