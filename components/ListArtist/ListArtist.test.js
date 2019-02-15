import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { ListArtist } from './ListArtist'

Enzyme.configure({ adapter: new Adapter() })

describe('<ListArtist />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(<ListArtist />)
  })

  test('Should renderer', () => {
    expect(wrapper).toBeDefined()
  })
})
