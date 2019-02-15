import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { createMockStore } from 'redux-test-utils'

import { Main } from '../../../components/Main/Main'
import { MainContainer } from '../Main.container'

Enzyme.configure({ adapter: new Adapter() })

const shallowWithStore = (component, store) => {
  const context = {
    store,
  }
  return shallow(component, { context })
}

const featureStore = state => {
  const store = createMockStore(state)
  return shallowWithStore(<MainContainer />, store)
}


describe('<MainContainer />', () => {
  describe('when render', () => {
    test('Should be object', () => {
      const state = {}

      const component = featureStore(state)
      expect(typeof component === 'object').toBeTruthy()
    })
  })

  test.skip('Should have <Main />', () => {
    const state = {}
    const component = featureStore(state)
    expect(component.dive().find(Main)).toHaveLength(1)
  })
})
