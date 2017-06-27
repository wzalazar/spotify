import { mount } from 'enzyme';

import Input from './Input';

describe('<Input />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Input />);
  });

  test('Should renderer', () => {
    expect(wrapper).toBeDefined();
  });
});
