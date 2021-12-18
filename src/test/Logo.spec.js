import { mount,shallowMount, createLocalVue, RouterLinkStub } from '@vue/test-utils';
import Logo from '@/components/Logo.vue'

describe('Logo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Logo, {
      propsData: {  },
      stubs: {
        NuxtLink: true,
        // Any other component that you want stubbed
      },
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
