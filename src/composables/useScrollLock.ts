import { onMounted, onUnmounted } from 'vue'

export function useScrollLock(lock = true) {
  onMounted(() => {
    if (lock) document.body.style.overflow = 'hidden'
  })

  onUnmounted(() => {
    document.body.style.overflow = ''
  })
}