import { createRouter, createWebHistory } from 'vue-router'
import WelcomeView from '@/views/WelcomeView.vue'
import ListView from '@/views/ListView.vue'
import FavoritesView from '@/views/FavoritesView.vue'
import MainLayout from '@/layout/MainLayout.vue'
import PokemonModal from '@/components/PokemonModal.vue'
import { useAppStore } from '@/stores/app'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: WelcomeView,
    },
    {
      path: '/list',
      name: 'list',
      component: MainLayout,
      children: [
        {
          path: '',
          name: 'all',
          component: ListView,
          children: [
            {
              path: ':name',
              component: PokemonModal
            }
          ]
        },
        {
          path: 'favorites',
          name: 'favorites',
          component: FavoritesView
        }
      ]
    },
  ],
})

router.beforeEach((to, from, next) => {
  const appStore = useAppStore()
  // appStore.setLoading(true)
  next()
})

router.afterEach((to, from, next) => {
  const appStore = useAppStore()
  setTimeout(() => {
    appStore.setLoading(false)
  }, 300)
})

export default router
