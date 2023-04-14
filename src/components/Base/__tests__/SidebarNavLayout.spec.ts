import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Sidebar from '../SidebarNavLayout.vue'

describe('Sidebar', () => {
  it('renders logo', () => {
    const wrapper = mount(Sidebar, { props: { logoAddr: 'https://example.com/logo.png' } })
    expect(wrapper.find('.header__logo img').attributes('src')).toBe('https://example.com/logo.png')
  })

  it('toggles sidebar on button click', async () => {
    const wrapper = mount(Sidebar, { props: { logoAddr: 'https://example.com/logo.png' } })

    // sidebar should be initially closed
    expect(wrapper.find('.main__aside').classes()).toContain('main__aside-close')

    // click on the button to open sidebar
    await wrapper.find('.header__burger-icon').trigger('click')

    // sidebar should be open now
    expect(wrapper.find('.main__aside').classes()).toContain('main__aside-open')

    // click on the button again to close sidebar
    await wrapper.find('.header__burger-icon').trigger('click')

    // sidebar should be closed again
    expect(wrapper.find('.main__aside').classes()).toContain('main__aside-close')
  })
})
