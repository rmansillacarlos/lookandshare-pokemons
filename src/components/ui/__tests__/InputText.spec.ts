import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import InputText from '@/components/ui/InputText.vue'

describe('InputText', () => {
  it('renders correct placeholder', () => {
    const wrapper = mount(InputText, {
      props: { placeholder: 'Search...' }
    })

    const input = wrapper.find('input')
    
    expect(input.exists()).toBe(true)
    expect(input.attributes('placeholder')).toBe('Search...')
  })

  it('emits update:modelValue', async () => {
    const wrapper = mount(InputText)

    const input = wrapper.find('input')
    
    await input.setValue('pikachu')

    expect(wrapper.emitted()['update:modelValue']).toBeTruthy()
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual(['pikachu'])
  })
})