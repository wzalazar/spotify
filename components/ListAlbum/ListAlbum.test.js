import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

import { ListAlbum } from './ListAlbum'

describe('<ListAlbum />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(<ListAlbum />)
  })

  test('Should renderer', () => {
    expect(wrapper).toBeDefined()
  })
})
