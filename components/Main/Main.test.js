import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { Main } from './Main'

Enzyme.configure({ adapter: new Adapter() })

describe('<Main />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(<Main />)
  })

  test('Should renderer', () => {
    expect(wrapper).toBeDefined()
  })
})
