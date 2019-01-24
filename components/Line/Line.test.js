import { mount } from 'enzyme'

import Line from './Line'

describe('<Line />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(<Line />)
  })

  test('Should renderer', () => {
    expect(wrapper).toBeDefined()
  })
})
