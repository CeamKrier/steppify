import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Steppify from '../../index'

Enzyme.configure({ adapter: new Adapter() })

const mockData = [
  {
    title: 'Evaluate Yourself',
    content: <div>
      <p>Why do you want to start a business? Use this question to guide what kind of business you want to start.</p>
      <ul>
        <li>What skills do you have?</li>
        <li>Where does your passion lie?</li>
        <li>Where is your area of expertise?</li>
      </ul>
    </div>
  },
  {
    title: 'Think of a business idea.',
    content: <div>
      <p>Do you already have a killer business idea? If so, congratulations, you can proceed to the next section.</p>
      <ul>
        <li>Ask yourself what´s next. What technology or advancement is coming soon,
        and how will that change the business landscape as we know it? Can you get ahead of the curve?</li>
        <li>Fix something that bugs you. People would rather have less of a bad thing than more of a good thing.
        If your business can fix a problem for your customers, they´ll thank you for it.</li>
      </ul>
      <p>Also, go out and meet people and ask them questions, seek advice from other entrepreneurs, research ideas online or use whatever method makes the most sense to you.</p>
    </div>
  }
]

it('container text renders on the page', () => {
  const wrapper = mount(
    <Steppify contents={mockData} showTitles />
  )

  expect(wrapper.find('h3').first().text()).toEqual(' 1 - Evaluate Yourself')
})
