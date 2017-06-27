import { mount } from 'enzyme';

import NavigationBar from './NavigationBar';
import Router from 'next/router';
const mockedRouter = {
  push: () => {},
  prefetch: () => {},
  pathname: '/',
};
Router.router = mockedRouter;

describe('<NavigationBar />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<NavigationBar />);
  });

  test('Should renderer', () => {
    expect(wrapper).toBeDefined();
  });
});
