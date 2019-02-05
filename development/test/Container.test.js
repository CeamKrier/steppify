import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Stepsy from '../../index'

Enzyme.configure({ adapter: new Adapter() })

it('container text renders on the page', () => {
  const wrapper = mount(
    <Stepsy />
  )

  expect(wrapper.find('h3').text()).toEqual('This is a test message')
})
