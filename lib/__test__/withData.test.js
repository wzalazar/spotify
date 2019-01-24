import withData from '../withData'
import { shallow } from 'enzyme'

describe('withData', () => {
  let wrapper
  let HOC
  let Component

  beforeAll(() => {
    Component = () => {
      return (
        <h1>withData</h1>
      )
    }

    HOC = withData(Component)
    wrapper = shallow(<HOC />)
  })

  test('Should has initialState', () => {
    const instance = wrapper.instance()
    expect(typeof instance.props.initialState === 'object').toBeTruthy()
  })

  describe('When Component has not getInitialProps', () => {
    test('Should be return object', (done) => {
      const resultPromise = HOC.getInitialProps({})
      resultPromise.then(data => {
        expect(typeof data === 'object').toBeTruthy()
        done()
      })
    })
  })

  describe('When Component has getInitialProps', () => {
    test('Should be called getInitialProps', () => {
      Component.getInitialProps = jest.fn()
      HOC.getInitialProps({})
      expect(Component.getInitialProps).toHaveBeenCalled()
    })
  })
})
