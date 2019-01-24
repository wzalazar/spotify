import { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { get } from 'lodash'
import { ListArtist } from '../../components/ListArtist/ListArtist'
import { ListAlbum } from '../../components/ListAlbum/ListAlbum'
import { ListTrack } from '../../components/ListTrack/ListTrack'
import { H2 } from '../../components/H2/H2'
import { getTrack } from '../../graphql/track'
import { onShowResultsAlbums, onShowResultsTracks } from './Results.actions'
import { onSearchTracksByAlbum } from '../Search/Search.actions'

@connect(({ results, search }) => ({
  search,
  results,
}))
class ResultsContainer extends Component {
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
    this.scroll
    this.state = {
      searchArtist: '',
      currentSelectedArtist: false,
      currentSelectedAlbum: false,
    }
  }


  componentDidMount() {
    this.audio = new Audio()
  }

  componentWillReceiveProps() {
    const { results } = this.props
    const { view } = results
    if (view !== 'RESULTS_TRACKS') {
      this.audio.pause()
    }
  }

  onClickArtist(artist) {
    const { store } = this.context
    store.dispatch(onShowResultsAlbums(artist))
    window.scrollTo(0, 0)
  }

  onClickAlbum(album) {
    const { store } = this.context
    store.dispatch(onShowResultsTracks(album))
    store.dispatch(onSearchTracksByAlbum({ query: getTrack, album: album.id }))
    window.scrollTo(0, 0)
  }

  onClickTrack(track) {
    this.audio.src = track.preview_url
    this.audio.play()
  }

  render() {
    const { search, results } = this.props
    const { view, currentSelectedArtist, currentSelectedAlbum } = results
    const artists = get(search, 'artists', [])
    const albums = get(currentSelectedArtist, 'albums', [])
    const tracks = get(search, 'tracks', [])
    const name = get(currentSelectedAlbum, 'name', '')
    const image = get(currentSelectedAlbum, 'images[0].url', '')

    const currentView = {
      'RESULTS_NOTHING': null,
      'RESULTS_ARTISTS': <ListArtist items={artists} onClick={this.onClickArtist.bind(this)} />,
      'RESULTS_ALBUMS': <ListAlbum items={albums} onClick={this.onClickAlbum.bind(this)} />,
      'RESULTS_TRACKS': <ListTrack name={name} onClick={this.onClickTrack.bind(this)} image={image} items={tracks} />,
      'RESULTS_NO_RESULTS': <H2>No results, try again :(</H2>,
      'RESULTS_ERROR': <p>sin implemntar</p>,
    }[view]

    return (
      <div className={'Results'}>
        {currentView}
      </div>
    )
  }
}

export default ResultsContainer
