import { mount } from 'enzyme'

import Search from './Search'

describe('<Search />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(<Search />)
  })

  test('Should renderer', () => {
    expect(wrapper).toBeDefined()
  })
})
