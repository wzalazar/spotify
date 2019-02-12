import { useState } from 'react'
import { connect } from 'react-redux'
import { get, isEmpty, noop } from 'lodash'

import { onSearch, onSearchCancelled, onSearchClear } from './Search.actions'
import { onShowResultsArtists, onShowResultsAlbums } from '../Results/Results.actions'
import { Search as SearchInput } from '../../components/Search/Search'
import { Breadcrumb } from '../../components/Breadcrumb/Breadcrumb'
import { getArtist } from '../../graphql/artist'

const RESULTS_ALBUMS = 'RESULTS_ALBUMS'
const RESULTS_TRACKS = 'RESULTS_TRACKS'

const Search = ({
  search = noop,
  searchClear = noop,
  searchCancelled = noop,
  showResultsArtists = noop,
  showResultsAlbums = noop,
  results = {},
}) => {
  const [artistSearched, setArtist] = useState('')

  const { view, currentSelectedArtist } = results
  const placeholder = 'Search...'

  const onChange = (artist) => {
    setArtist(artist)
    searchCancelled()
    isEmpty(artist) ? searchClear() : search({ query: getArtist, artist })
  }

  const items = [{
    label: 'Artists',
    onClick: showResultsArtists,
    active: false,
  }]

  const itemAlbum = {
    label: 'Albums',
    onClick: view !== RESULTS_ALBUMS ? () => showResultsAlbums(currentSelectedArtist) : noop,
    active: view === RESULTS_ALBUMS,
  }

  const itemArtist = {
    label: get(currentSelectedArtist, 'name', ''),
    onClick: noop,
    active: view === RESULTS_TRACKS,
  }

  if (view === RESULTS_ALBUMS || view === RESULTS_TRACKS) {
    items.push(itemAlbum)
    items.push(itemArtist)
  }

  const showBreadcrumb = view === RESULTS_ALBUMS || view === RESULTS_TRACKS ? (
    <Breadcrumb items={items} />
  ) : null


  return (
    <div>
      <SearchInput onChange={onChange}
        placeholder={placeholder}
        value={artistSearched} />

      {showBreadcrumb}
    </div>
  )
}


const mapStateToProps = (state) => ({
  results: state.results,
})

const mapDispathToProps = {
  search: onSearch,
  searchClear: onSearchClear,
  searchCancelled: onSearchCancelled,
  showResultsArtists: onShowResultsArtists,
  showResultsAlbums: onShowResultsAlbums,
}

export const SearchContainer = connect(mapStateToProps, mapDispathToProps)(Search)
