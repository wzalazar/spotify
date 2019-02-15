import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { ListTrack } from './ListTrack'

Enzyme.configure({ adapter: new Adapter() })

describe('<ListTrack />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(<ListTrack />)
  })

  test('Should renderer', () => {
    expect(wrapper).toBeDefined()
  })
})
