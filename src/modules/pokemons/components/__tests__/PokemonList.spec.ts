import { mount } from '@vue/test-utils'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'

import PokemonList from '@/modules/pokemons/components/PokemonList.vue'
import type { PokemonItem as PokemonItemType } from '@/modules/pokemons/types/pokemon'

const mockPush = vi.fn()

vi.mock('vue-router', () => ({
  useRouter: () => ({
    push: mockPush
  })
}))

describe('PokemonList', () => {
  beforeEach(() => {
    const pinia = createPinia()
    setActivePinia(pinia)
  })

  const pokemons: PokemonItemType[] = [
    { name: 'pikachu', favorite: true },
    { name: 'charmander', favorite: false },
    { name: 'bulbasaur', favorite: false }
  ]

  it('render all pokemons', () => {
    const wrapper = mount(PokemonList, {
      props: { pokemons }
    })

    const lis = wrapper.findAll('li')
    
    expect(lis.length).toBe(3)
    expect(wrapper.text()).toContain('pikachu')
    expect(wrapper.text()).toContain('charmander')
    expect(wrapper.text()).toContain('bulbasaur')
  })

  it('navigate to pokemon by clicking anchor', async () => {
    const wrapper = mount(PokemonList, {
      props: { pokemons }
    })

    const firstLink = wrapper.find('a')
    await firstLink.trigger('click')

    expect(mockPush).toHaveBeenCalledWith({ path: `/pokemons/all/pikachu` })
  })
})
