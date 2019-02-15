import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { Text } from './Text'

Enzyme.configure({ adapter: new Adapter() })

describe('<Text />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(<Text />)
  })

  test('Should renderer', () => {
    expect(wrapper).toBeDefined()
  })
})
