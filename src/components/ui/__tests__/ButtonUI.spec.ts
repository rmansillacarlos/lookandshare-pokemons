import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ButtonUI from '@/components/ui/ButtonUI.vue'

describe('ButtonUI', () => {
  it('renders slot properly', () => {
    const wrapper = mount(ButtonUI, {
      slots: {
        default: 'Click me'
      }
    })

    expect(wrapper.text()).toBe('Click me')
    expect(wrapper.find('button').exists()).toBe(true)
  })

  it('apply default variant', () => {
    const wrapper = mount(ButtonUI)

    const btn = wrapper.find('button')
    expect(btn.classes()).toContain('bg-red-600')
    expect(btn.classes()).toContain('text-white')
  })

  
  it('apply specific variant', () => {
    const wrapper = mount(ButtonUI, {
      props: {
        variant: 'secondary'
      }
    })

    const btn = wrapper.find('button')
    expect(btn.classes()).toContain('bg-gray-400')
    expect(btn.classes()).toContain('text-white')
  })
})