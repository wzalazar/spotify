import { mount } from 'enzyme';

import ListTrack from './ListTrack';

describe('<ListTrack />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<ListTrack />);
  });

  test('Should renderer', () => {
    expect(wrapper).toBeDefined();
  });
});
