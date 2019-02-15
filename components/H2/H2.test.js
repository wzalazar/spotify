import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

import { H2 } from './H2'

describe('<H2 />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(<H2 />)
  })

  test('Should renderer', () => {
    expect(wrapper).toBeDefined()
  })
})
