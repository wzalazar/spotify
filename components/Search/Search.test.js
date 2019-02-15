import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { Search } from './Search'

Enzyme.configure({ adapter: new Adapter() })

describe('<Search />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(<Search />)
  })

  test('Should renderer', () => {
    expect(wrapper).toBeDefined()
  })
})
