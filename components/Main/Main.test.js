import { mount } from 'enzyme';

import Main from './Main';

describe('<Main />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Main />);
  });

  test('Should renderer', () => {
    expect(wrapper).toBeDefined();
  });
});
