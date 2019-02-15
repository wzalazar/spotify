import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

import { Artist } from './Artist'

describe('<Artist />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(<Artist />)
  })

  test('Should renderer', () => {
    expect(wrapper).toBeDefined()
  })
})
