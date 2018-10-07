import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { IconButton } from '../../components/IconButton'

Enzyme.configure({ adapter: new Adapter() })

describe ('<IconButton />', () => {
  it('must render a button and a i', () => {
    const wrapper = shallow(<IconButton />)
    const element = wrapper.getElement()
    expect(wrapper.find('i').exists()).toBeTruthy()
    expect(element.props).toHaveProperty('className', 'search-button')
  })
})




