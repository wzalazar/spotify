import { mount } from 'enzyme'

import ProgressBar from './ProgressBar'

describe('<ProgressBar />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(<ProgressBar />)
  })

  test('Should renderer', () => {
    expect(wrapper).toBeDefined()
  })
})
