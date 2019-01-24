import { mount } from 'enzyme'

import Layout from './Layout'
import Router from 'next/router'
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
