// import { Component } from 'react'
// import { connect } from 'react-redux'
import { Main } from '../../components/Main/Main'
import { SearchContainer } from '../Search/Search.container'
import { ResultsContainer } from '../Results/Results.container'

// @connect(({ results }) => ({
//   results,
// }))
// class MainContainer extends Component {
//   constructor() {
//     super()
//   }

//   render() {
//     return (
//       <Main>
//         <Search />
//         <Results />
//       </Main>
//     )
//   }
// }

// export default MainContainer

export const MainContainer = () => (
  <Main>
    <SearchContainer />
    <ResultsContainer />
  </Main>
)
