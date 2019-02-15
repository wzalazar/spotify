import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Router from 'next/router'

import { NavigationBar } from './NavigationBar'

Enzyme.configure({ adapter: new Adapter() })

const mockedRouter = {
  push: () => {},
  prefetch: () => {},
  pathname: '/',
}
Router.router = mockedRouter

describe('<NavigationBar />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(<NavigationBar />)
  })

  test('Should renderer', () => {
    expect(wrapper).toBeDefined()
  })
})
