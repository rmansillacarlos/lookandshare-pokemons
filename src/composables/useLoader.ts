import { watch, type Ref } from 'vue'
import { useAppStore } from '@/stores/app'

export const useLoader = (isLoading: Ref<boolean>) => {
  const appStore = useAppStore()

  watch(isLoading, (): void => {
    if (isLoading.value) appStore.setLoading(true)
    else appStore.setLoading(false)
  })
}