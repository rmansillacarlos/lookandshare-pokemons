import { describe, it, expect, vi, beforeEach } from 'vitest'
import { VueQueryPlugin, QueryClient } from '@tanstack/vue-query'
import { createPinia, setActivePinia } from 'pinia'
import { createTestingPinia } from '@pinia/testing'
import { usePokemonStore } from '@/modules/pokemons/store/pokemon.store'

import { mount } from '@vue/test-utils'
import ListView from '../ListView.vue'

const mockPush = vi.fn()
const mockRoute = {
  params: {}
}

vi.mock('vue-router', () => ({
  useRouter: () => ({
    push: mockPush
  }),
  useRoute: () => mockRoute
}))

vi.mock('@/modules/pokemons/composables/usePokemons', () => ({
  default: () => ({
    fetchPokemons: vi.fn().mockImplementation(() => {
      const store = usePokemonStore()
      store.pokemons = [
        { name: 'pikachu', favorite: true },
        { name: 'bulbasaur', favorite: false }
      ]
    }),
    closeModal: vi.fn()
  })
}))

const mockGetPokemonDetail = vi.fn().mockResolvedValue()

vi.mock('@/modules/pokemons/composables/usePokemonDetail', () => ({
  default: (name: string) => ({
    getPokemonDetail: async () => {
      const store = usePokemonStore()
      store.pokemonDetail = {
        name: 'pikachu',
        img: 'pikachu.png',
        favorite: true,
        weight: 20,
        height: 30,
        types: ['electric'],
      }
      await mockGetPokemonDetail(name)
    }
  })
}))

const queryClient = new QueryClient()

describe('ListView', async () => {
  beforeEach(() => {
    const pinia = createPinia()
    setActivePinia(pinia)
  })

  it('load pokemon list properly', async () => {
    const wrapper = mount(ListView, {
      global: {
        plugins: [
          [VueQueryPlugin, { queryClient }],
          createTestingPinia({
            createSpy: vi.fn
          })
        ]
      }
    })
    await new Promise(resolve => setTimeout(resolve, 0))
    await wrapper.vm.$nextTick()
    
    expect(wrapper.text()).toContain('pikachu')
    expect(wrapper.text()).toContain('bulbasaur')
  })

  it('open pokemon detailw modal', async () => {
    const wrapper = mount(ListView, {
      global: {
        plugins: [
          [VueQueryPlugin, { queryClient }],
          createTestingPinia({
            createSpy: vi.fn
          })
        ]
      }
    })
    await new Promise(resolve => setTimeout(resolve, 0))
    await wrapper.vm.$nextTick()

    const detailLink = wrapper.find('a')
    await detailLink.trigger('click')

    mockRoute.params = { name: 'pikachu' }
    await wrapper.vm.$forceUpdate()

    expect(wrapper.findComponent({ name: 'PokemonModal' }).exists()).toBe(true)
    expect(wrapper.text()).toContain('name:pikachu')
    expect(wrapper.text()).toContain('height:30')
  })
})