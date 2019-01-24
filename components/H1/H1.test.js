import { mount } from 'enzyme'

import H1 from './H1'

describe('<H1 />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(<H1 />)
  })

  test('Should renderer', () => {
    expect(wrapper).toBeDefined()
  })
})
