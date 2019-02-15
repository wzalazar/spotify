import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { ProgressBar } from './ProgressBar'

Enzyme.configure({ adapter: new Adapter() })

describe('<ProgressBar />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(<ProgressBar />)
  })

  test('Should renderer', () => {
    expect(wrapper).toBeDefined()
  })
})
