import { mount } from 'enzyme';

import Hamburger from './Hamburger';

describe('<Hamburger />', () => {
  let wrapper;
  const onClickMock = jest.fn();

  beforeEach(() => {
    wrapper = mount(<Hamburger onClick={onClickMock} />);
  });

  test('Should renderer', () => {
    expect(wrapper).toBeDefined();
  });

  test('Should click', () => {
    wrapper.find('.Hamburger').simulate('click');
    expect(onClickMock.mock.calls.length).toBe(1);
  });
});
