import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { SpotifyLogo } from './SpotifyLogo'

Enzyme.configure({ adapter: new Adapter() })

describe('<SpotifyLogo />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(<SpotifyLogo />)
  })

  test('Should renderer', () => {
    expect(wrapper).toBeDefined()
  })
})
