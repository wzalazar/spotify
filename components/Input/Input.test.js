import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })
import { Input } from './Input'

describe('<Input />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(<Input />)
  })

  test('Should renderer', () => {
    expect(wrapper).toBeDefined()
  })
})
