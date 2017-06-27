import { mount } from 'enzyme';

import Text from './Text';

describe('<Text />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Text />);
  });

  test('Should renderer', () => {
    expect(wrapper).toBeDefined();
  });
});
