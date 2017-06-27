import { Component } from 'react';
import Main from '../../components/Main/Main';
import Search from '../Search/Search.container';
import Results from '../Results/Results.container';


export default class MainContainer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Main>
        <Search />
        <Results />
      </Main>
    );
  }
}
