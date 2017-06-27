import { mount } from 'enzyme';

import H2 from './H2';

describe('<H2 />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<H2 />);
  });

  test('Should renderer', () => {
    expect(wrapper).toBeDefined();
  });
});
