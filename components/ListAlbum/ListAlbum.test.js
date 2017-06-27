import { mount } from 'enzyme';

import ListAlbum from './ListAlbum';

describe('<ListAlbum />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<ListAlbum />);
  });

  test('Should renderer', () => {
    expect(wrapper).toBeDefined();
  });
});
