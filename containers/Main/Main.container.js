import { Main } from '../../components/Main/Main'
import { SearchContainer } from '../Search/Search.container'
import { ResultsContainer } from '../Results/Results.container'

export const MainContainer = () => (
  <Main>
    <SearchContainer />
    <ResultsContainer />
  </Main>
)
