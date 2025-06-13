import { createRouter, createWebHistory } from 'vue-router'
import WelcomeView from '@/views/WelcomeView.vue'
import ListView from '@/views/ListView.vue'
import FavoritesView from '@/views/FavoritesView.vue'
import MainLayout from '@/layout/MainLayout.vue'
import { useAppStore } from '@/stores/app'
import PokemonModal from '@/components/PokemonModal.vue'


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

export default router
