import { mount } from 'enzyme';

import ListArtist from './ListArtist';

describe('<ListArtist />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<ListArtist />);
  });

  test('Should renderer', () => {
    expect(wrapper).toBeDefined();
  });
});
