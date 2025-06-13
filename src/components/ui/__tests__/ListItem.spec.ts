import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ListItem from '@/components/ui/ListItem.vue'

describe('ListItem', () => {
  it('renders slot properly', () => {
    const wrapper = mount(ListItem, {
      slots: {
        default: '<span>Sample Content</span>'
      }
    })

    expect(wrapper.text()).toContain('Sample Content')
    expect(wrapper.find('li').exists()).toBe(true)
  })
})