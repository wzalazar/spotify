import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { createMockStore } from 'redux-test-utils'

import { Layout } from '../../../components/Layout/Layout'
import { LayoutContainer } from '../Layout.container'

Enzyme.configure({ adapter: new Adapter() })

const shallowWithStore = (component, store) => {
  const context = {
    store,
  }
  return shallow(component, { context })
}

const featureStore = state => {
  const store = createMockStore(state)
  return shallowWithStore(<LayoutContainer />, store)
}


describe('<LayoutContainer />', () => {
  describe('when render', () => {
    test('Should be object', () => {
      const state = {
        results: {},
      }

      const component = featureStore(state)
      expect(typeof component === 'object').toBeTruthy()
    })
  })

  describe('when results view is RESULTS_TRACKS', () => {
    test.skip('Should have class on-track', () => {
      const state = {
        results: {
          view: 'RESULTS_TRACKS',
        },
      }

      const component = featureStore(state)
      expect(component.dive().find(Layout).prop('className')).toEqual('on-track')
    })
  })
})
