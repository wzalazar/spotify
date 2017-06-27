import { mount } from 'enzyme';

import Album from './Album';

describe('<Album />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Album />);
  });

  test('Should renderer', () => {
    expect(wrapper).toBeDefined();
  });
});
