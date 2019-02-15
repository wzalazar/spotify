import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

import { Line } from './Line'

describe('<Line />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(<Line />)
  })

  test('Should renderer', () => {
    expect(wrapper).toBeDefined()
  })
})
