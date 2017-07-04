import { shallow } from 'enzyme';
import { createMockStore } from 'redux-test-utils';
import LayoutContainer from '../Layout.container';
import Layout from '../../../components/Layout/Layout';

const shallowWithStore = (component, store) => {
  const context = {
    store,
  };
  return shallow(component, { context });
};

const featureStore = state => {
  const store = createMockStore(state);
  return shallowWithStore(<LayoutContainer />, store);
};


describe('<LayoutContainer />', () => {
  describe('when render', () => {
    test('Should be object', () => {
      const state = {
        results: {},
      };

      const component = featureStore(state);
      expect(typeof component === 'object').toBeTruthy();
    });
  });

  describe('when results view is RESULTS_TRACKS', () => {
    test('Should have class on-track', () => {
      const state = {
        results: {
          view: 'RESULTS_TRACKS',
        },
      };

      const component = featureStore(state);
      expect(component.dive().find(Layout).prop('className')).toEqual('on-track');
    });
  });
});
