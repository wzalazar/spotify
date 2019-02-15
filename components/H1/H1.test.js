import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })
import { H1 } from './H1'

describe('<H1 />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(<H1 />)
  })

  test('Should renderer', () => {
    expect(wrapper).toBeDefined()
  })
})
