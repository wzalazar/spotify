import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { get } from 'lodash'

import { ListArtist } from '../../components/ListArtist/ListArtist'
import { ListAlbum } from '../../components/ListAlbum/ListAlbum'
import { ListTrack } from '../../components/ListTrack/ListTrack'
import { H2 } from '../../components/H2/H2'
import { getTrack } from '../../graphql/track'
import { onShowResultsAlbums, onShowResultsTracks } from './Results.actions'
import { onSearchTracksByAlbum } from '../Search/Search.actions'

export const Results = ({
  search = {},
  results = {},
  showResultsAlbums = noop,
  showResultsTracks = noop,
  searchTracksByAlbum = noop,
}) => {
  const [audio, setAudio] = useState(undefined)

  const { view, currentSelectedArtist, currentSelectedAlbum } = results
  const artists = get(search, 'artists', [])
  const albums = get(currentSelectedArtist, 'albums', [])
  const tracks = get(search, 'tracks', [])
  const name = get(currentSelectedAlbum, 'name', '')
  const image = get(currentSelectedAlbum, 'images[0].url', '')

  useEffect(() => {
    setAudio(new Audio())
  }, [])

  const onClickTrack = (track) => {
    if (audio) {
      audio.src = track.preview_url
      audio.play()
    }
  }

  const onClickArtist = artist => {
    showResultsAlbums(artist)
    window.scrollTo(0, 0)
  }

  const onClickAlbum = album => {
    showResultsTracks(album)
    searchTracksByAlbum({ query: getTrack, album: album.id })
    window.scrollTo(0, 0)
  }

  const currentView = {
    'RESULTS_NOTHING': null,
    'RESULTS_ARTISTS': <ListArtist items={artists} onClick={onClickArtist} />,
    'RESULTS_ALBUMS': <ListAlbum items={albums} onClick={onClickAlbum} />,
    'RESULTS_TRACKS': <ListTrack name={name} onClick={onClickTrack} image={image} items={tracks} />,
    'RESULTS_NO_RESULTS': <H2>No results, try again :(</H2>,
    'RESULTS_ERROR': <p>Error</p>,
  }[view]

  return (
    <div className={'Results'}>
      {currentView}
    </div>
  )
}

const mapStateToProps = (state) => ({
  results: state.results,
  search: state.search,
})

const mapDispatchToProps = {
  showResultsAlbums: onShowResultsAlbums,
  showResultsTracks: onShowResultsTracks,
  searchTracksByAlbum: onSearchTracksByAlbum,
}

export const ResultsContainer = connect(mapStateToProps, mapDispatchToProps)(Results)
