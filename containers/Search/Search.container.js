import { Component } from 'react'
import PropTypes from 'prop-types'
import { connect} from 'react-redux'
import { onSearch, onSearchCancelled, onSearchClear } from './Search.actions'
import { onShowResultsArtists, onShowResultsAlbums } from '../Results/Results.actions'
import { getArtist } from '../../graphql/artist'
import { get, isEmpty, debounce, noop } from 'lodash'
import Search from '../../components/Search/Search'
// import ProgressBar from '../../components/ProgressBar/ProgressBar'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'


@connect(({ search, results }) => ({
  search,
  results,
}))
class SearchContainer extends Component {
  static propTypes = {
    search: PropTypes.object,
    results: PropTypes.object,
  }

  static contextTypes = {
    store: PropTypes.object,
  }

  static defaultProps = {
    search: {},
    results: {},
  }

  constructor() {
    super()

    this.state = {
      searchArtist: '',
      currentSelectedArtist: '',
      currentSelectedAlbum: '',
    }
  }

  componentDidMount() {
    const { store } = this.context
    const state = store.getState()
    const searchArtist = get(state, 'search.currentSelectedArtist', '')
    this.setState({ searchArtist })

    const annyang = require('annyang')
    this.audio = new Audio()
    if (annyang) {
      const commands = {
        'search *artist': (artist) => {
          this.setState({ searchArtist: artist })
          store.dispatch(onSearch({ query: getArtist, artist }))
        },
      }

      annyang.addCommands(commands)
      annyang.start({ autoRestart: true, continuous: false })

      annyang.debug()
    }
  }

  onChange = debounce((artist) => {
    const { store } = this.context
    store.dispatch(onSearchCancelled())

    if (isEmpty(artist)) {
      store.dispatch(onSearchClear())
    } else {
      store.dispatch(onSearch({ query: getArtist, artist }))
    }
  }, 250);

  render() {
    // const { search, results } = this.props
    const { results } = this.props
    const { view, currentSelectedArtist } = results
    const { searchArtist } = this.state
    // const { isSearching } = search
    const placeholder = 'Search...'

    // const showProgressBar = isSearching ? (
    //   <ProgressBar show />
    // ) : null;

    const items = [{
      label: 'Artists',
      onClick: this.goToArtists.bind(this),
      active: false,
    }]

    const itemAlbum = {
      label: 'Albums',
      onClick: view !== 'RESULTS_ALBUMS' ? this.goToAlbums.bind(this) : noop,
      active: view === 'RESULTS_ALBUMS' ? true : false,
    }

    const itemArtist = {
      label: get(currentSelectedArtist, 'name', ''),
      onClick: noop,
      active: view === 'RESULTS_TRACKS' ? true : false,
    }

    if (view === 'RESULTS_ALBUMS' || view === 'RESULTS_TRACKS') {
      items.push(itemAlbum)
      items.push(itemArtist)
    }

    const showBreadcrumb = view === 'RESULTS_ALBUMS' || view === 'RESULTS_TRACKS' ? (
      <Breadcrumb items={items} />
    ) : null

    return (
      <div>
        <Search onChange={ e => { this.onChange(e); this.changeValue(e) } }
          placeholder={placeholder}
          value={searchArtist} />

        {/* {showProgressBar} */}
        {showBreadcrumb}
      </div>
    )
  }

  changeValue(artist) {
    this.setState({ searchArtist: artist })
  }

  goToArtists() {
    const { store } = this.context
    store.dispatch(onShowResultsArtists())
  }

  goToAlbums() {
    const { results } = this.props
    const { currentSelectedArtist } = results
    const { store } = this.context
    store.dispatch(onShowResultsAlbums(currentSelectedArtist))
  }
}

export default SearchContainer
