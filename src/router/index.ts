import { createRouter, createWebHistory } from 'vue-router'
import WelcomeView from '@/views/WelcomeView.vue'
import MainLayout from '@/layout/MainLayout.vue'
import ListView from '@/views/ListView.vue'
import FavoritesView from '@/views/FavoritesView.vue'
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
      path: '/pokemons',
      name: 'pokemons',
      component: MainLayout,
      children: [
        {
          path: 'all/:name?',
          name: 'all',
          component: ListView,
          // children: [
          //   {
          //     path: ':name',
          //     component: PokemonModal
          //   }
          // ]
        },
        {
          path: 'fav/:name?',
          name: 'favorites',
          component: FavoritesView,
          // children: [
          //   {
          //     path: ':name',
          //     component: PokemonModal
          //   }
          // ]
        }
      ]
    },
  ],
})

export default router
