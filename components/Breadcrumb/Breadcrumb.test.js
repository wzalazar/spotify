import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })
import { Breadcrumb } from './Breadcrumb'

describe('<Breadcrumb />', () => {
  const onClickMock = jest.fn()
  const items = [{
    label: '',
    onClick: onClickMock,
    active: true,
  }, {
    label: '',
    onClick: () => {},
    active: false,
  }]

  test('Should renderer', () => {
    const wrapper = mount(<Breadcrumb items={items} />)
    expect(wrapper).toBeDefined()
  })

  test.skip('Should click', () => {
    const wrapper = mount(<Breadcrumb items={items} />)
    wrapper.find('.Breadcrumb__link .active').simulate('click')
    expect(onClickMock.mock.calls.length).toBe(1)
  })
})
