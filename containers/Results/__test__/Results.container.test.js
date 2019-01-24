import { shallow } from 'enzyme'
import { createMockStore } from 'redux-test-utils'
import ResultsContainer from '../Results.container'
import ListArtist from '../../../components/ListArtist/ListArtist'
import ListAlbum from '../../../components/ListAlbum/ListAlbum'
import ListTrack from '../../../components/ListTrack/ListTrack'

const shallowWithStore = (component, store) => {
  const context = {
    store,
  }
  return shallow(component, { context })
}

const featureStore = state => {
  const store = createMockStore(state)
  store.dispatch = jest.fn()
  return {
    wrapper: shallowWithStore(<ResultsContainer />, store),
    store,
  }
}


describe('<ResultsContainer />', () => {
  describe('when render', () => {
    test('Should be object', () => {
      const state = {}

      const { wrapper } = featureStore(state)
      expect(typeof wrapper === 'object').toBeTruthy()
    })
  })

  describe('when results view is RESULTS_ARTISTS', () => {
    test('Should show <ListArtist />', () => {
      const state = {
        results: {
          view: 'RESULTS_ARTISTS',
        },
      }

      const { wrapper } = featureStore(state)
      expect(wrapper.dive().find(ListArtist)).toHaveLength(1)
    })
  })

  describe('when results view is RESULTS_ALBUMS', () => {
    test('Should show <ListAlbum />', () => {
      const state = {
        results: {
          view: 'RESULTS_ALBUMS',
        },
      }

      const { wrapper } = featureStore(state)
      expect(wrapper.dive().find(ListAlbum)).toHaveLength(1)
    })
  })

  describe('when results view is RESULTS_TRACKS', () => {
    test('Should show <ListTrack />', () => {
      const state = {
        results: {
          view: 'RESULTS_TRACKS',
        },
      }

      const { wrapper } = featureStore(state)
      expect(wrapper.dive().find(ListTrack)).toHaveLength(1)
    })
  })

  describe('when execute onClickArtist', () => {
    test('Should dispatch SHOW_RESULTS_ALBUMS', () => {
      const state = {
        results: {
          view: 'RESULTS_ARTISTS',
        },
      }

      const { wrapper, store } = featureStore(state)
      wrapper.dive().instance().onClickArtist()
      expect(store.dispatch).toHaveBeenCalledWith({ type: 'SHOW_RESULTS_ALBUMS' })
    })
  })

  describe('when execute onClickAlbum', () => {
    test('Should dispatch SHOW_RESULTS_ALBUMS', () => {
      const state = {
        results: {
          view: 'RESULTS_ALBUMS',
        },
      }

      const { wrapper, store } = featureStore(state)
      const album = {
        _id: '123456',
      }
      wrapper.dive().instance().onClickAlbum(album)
      expect(store.dispatch).toHaveBeenCalled()
    })
  })

  describe('when execute onClickTrack', () => {
    test('Should execute play', () => {
      const state = {
        results: {
          view: 'RESULTS_TRACKS',
        },
      }

      const { wrapper } = featureStore(state)
      /* eslint-disable no-proto */
      wrapper.dive().instance().__proto__.audio = {
      /* eslint-enable no-proto */
        play: jest.fn(),
        src: {},
      }
      const track = {
        preview_url: '',
      }
      wrapper.dive().instance().onClickTrack(track)
      expect(wrapper.dive().instance().audio.play).toHaveBeenCalled()
    })
  })
})
