import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import PokemonItem from '@/modules/pokemons/components/PokemonItem.vue'

describe('PokemonListItem', () => {
  beforeEach(() => {
    const pinia = createPinia()
    setActivePinia(pinia)
  })

  it('renders pokemon name & icon properly', () => {
    const wrapper = mount(PokemonItem, {
      props: {
        name: 'Charizard',
        favorite: false,
      }
    })
    const icon = wrapper.findComponent({ name: 'IconUI' })

    expect(icon.exists()).toBe(true)
    expect(icon.classes()).toContain('text-gray-300')
    expect(wrapper.text()).toContain('Charizard')
  })

  it('renders fav button properly if favorite', () => {
    const wrapper = mount(PokemonItem, {
      props: {
        name: 'Charizard',
        favorite: true,
      }
    })
    const icon = wrapper.findComponent({ name: 'IconUI' })
    
    expect(icon.classes()).toContain('text-amber-400')
  })
})