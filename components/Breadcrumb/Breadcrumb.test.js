import { mount } from 'enzyme'

import Breadcrumb from './Breadcrumb'

describe('<Breadcrumb />', () => {
  let wrapper
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

  beforeEach(() => {
    wrapper = mount(<Breadcrumb items={items} />)
  })

  test('Should renderer', () => {
    expect(wrapper).toBeDefined()
  })

  test('Should click', () => {
    wrapper.find('.Breadcrumb__link .active').simulate('click')
    expect(onClickMock.mock.calls.length).toBe(1)
  })
})
