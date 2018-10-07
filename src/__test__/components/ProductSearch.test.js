import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { ProductSearch } from '../../components/ProductSearch'

Enzyme.configure({ adapter: new Adapter() })

describe ('<ProductSearch />', () => {
  it('must render a button and a i', () => {
    const wrapper = shallow(<ProductSearch />)
    expect(wrapper.find('Grid Row Col FormControl').exists()).toBeTruthy()
  })
})


