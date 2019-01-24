import { mount } from 'enzyme'

import {SpotifyLogo} from './SpotifyLogo'

describe('<SpotifyLogo />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(<SpotifyLogo />)
  })

  test('Should renderer', () => {
    expect(wrapper).toBeDefined()
  })
})
