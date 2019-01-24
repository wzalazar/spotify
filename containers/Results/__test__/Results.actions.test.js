import { isFunction } from 'lodash'
import {
  SHOW_RESULTS_NOTHING,
  SHOW_RESULTS_ARTISTS,
  SHOW_RESULTS_ALBUMS,
  SHOW_RESULTS_TRACKS,
  SHOW_RESULTS_NO_RESULTS,
  SHOW_RESULTS_ERROR,
  onShowResultsNothing,
  onShowResultsArtists,
  onShowResultsAlbums,
  onShowResultsTracks,
  onShowResultsNoResults,
  onShowResultsError,
} from '../Results.actions'


describe('Results actions', () => {
  describe('When call onShowResultsNothing', () => {
    test('Should be a funtion', () => {
      expect(isFunction(onShowResultsNothing)).toBeTruthy()
    })

    test('Should type equal to IDENTIFICATION', () => {
      expect(onShowResultsNothing().type).toEqual(SHOW_RESULTS_NOTHING)
    })
  })

  describe('When call onShowResultsArtists', () => {
    test('Should be a funtion', () => {
      expect(isFunction(onShowResultsArtists)).toBeTruthy()
    })

    test('Should type equal to SHOW_RESULTS_ARTISTS', () => {
      expect(onShowResultsArtists().type).toEqual(SHOW_RESULTS_ARTISTS)
    })
  })

  describe('When call onShowResultsAlbums', () => {
    test('Should be a funtion', () => {
      expect(isFunction(onShowResultsAlbums)).toBeTruthy()
    })

    test('Should type equal to SHOW_RESULTS_ALBUMS', () => {
      expect(onShowResultsAlbums().type).toEqual(SHOW_RESULTS_ALBUMS)
    })
  })

  describe('When call onShowResultsTracks', () => {
    test('Should be a funtion', () => {
      expect(isFunction(onShowResultsTracks)).toBeTruthy()
    })

    test('Should type equal to SHOW_RESULTS_TRACKS', () => {
      expect(onShowResultsTracks().type).toEqual(SHOW_RESULTS_TRACKS)
    })
  })

  describe('When call onShowResultsNoResults', () => {
    test('Should be a funtion', () => {
      expect(isFunction(onShowResultsNoResults)).toBeTruthy()
    })

    test('Should type equal to SHOW_RESULTS_NO_RESULTS', () => {
      expect(onShowResultsNoResults().type).toEqual(SHOW_RESULTS_NO_RESULTS)
    })
  })

  describe('When call onShowResultsError', () => {
    test('Should be a funtion', () => {
      expect(isFunction(onShowResultsError)).toBeTruthy()
    })

    test('Should type equal to SHOW_RESULTS_ERROR', () => {
      expect(onShowResultsError().type).toEqual(SHOW_RESULTS_ERROR)
    })
  })
})
