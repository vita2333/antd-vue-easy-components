import { shallowMount } from '@vue/test-utils'
import TestComponent from '../../packages/test-component'

describe('TestComponent', () => {
  it('render props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(TestComponent, { propsData: { msg } })
    expect(wrapper.text()).toMatch(msg)
  })
})
