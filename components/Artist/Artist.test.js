import { mount } from 'enzyme';

import Artist from './Artist';

describe('<Artist />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Artist />);
  });

  test('Should renderer', () => {
    expect(wrapper).toBeDefined();
  });
});
