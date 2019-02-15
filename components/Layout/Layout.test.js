import Enzyme, { mount } from 'enzyme'
import Router from 'next/router'
import Adapter from 'enzyme-adapter-react-16'

import { Layout } from './Layout'

Enzyme.configure({ adapter: new Adapter() })

const mockedRouter = {
  push: () => {},
  prefetch: () => {},
  pathname: '/',
}

Router.router = mockedRouter

describe('<Layout />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(<Layout />)
  })

  test('Should renderer', () => {
    expect(wrapper).toBeDefined()
  })
})
