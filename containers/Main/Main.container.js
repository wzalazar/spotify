import { Component } from 'react'
import { connect} from 'react-redux'
import Main from '../../components/Main/Main'
import Search from '../Search/Search.container'
import Results from '../Results/Results.container'

@connect(({ results }) => ({
  results,
}))
class MainContainer extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <Main>
        <Search />
        <Results />
      </Main>
    )
  }
}

export default MainContainer
