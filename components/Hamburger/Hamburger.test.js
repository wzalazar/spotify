import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { Hamburger } from './Hamburger'

Enzyme.configure({ adapter: new Adapter() })

describe('<Hamburger />', () => {
  const onClickMock = jest.fn()

  test.skip('Should renderer', () => {
    const wrapper = mount(<Hamburger onClick={onClickMock} />)
    expect(wrapper).toBeDefined()
  })

  test.skip('Should click', () => {
    const wrapper = mount(<Hamburger onClick={onClickMock} />)
    wrapper.find('.Hamburger').simulate('click')
    expect(onClickMock.mock.calls.length).toBe(1)
  })
})
