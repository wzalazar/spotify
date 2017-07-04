import { shallow } from 'enzyme';
import { createMockStore } from 'redux-test-utils';
import MainContainer from '../Main.container';
import Main from '../../../components/Main/Main';

const shallowWithStore = (component, store) => {
  const context = {
    store,
  };
  return shallow(component, { context });
};

const featureStore = state => {
  const store = createMockStore(state);
  return shallowWithStore(<MainContainer />, store);
};


describe('<MainContainer />', () => {
  describe('when render', () => {
    test('Should be object', () => {
      const state = {};

      const component = featureStore(state);
      expect(typeof component === 'object').toBeTruthy();
    });
  });

  test('Should have <Main />', () => {
    const state = {};
    const component = featureStore(state);
    expect(component.dive().find(Main)).toHaveLength(1);
  });
});
