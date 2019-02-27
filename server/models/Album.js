const { GraphQL } = require('@graphite/server')
const { get } = require('lodash')

const { loaderTracksByAlbum, loaderAlbum } = require('../loaders')
const spotify = require('../api/spotify')

const Album = GraphQL('Album')({
  id: ['ID'],
  name: ['String'],
  type: ['String'],
  'album_type': ['String'],

  'images: [Image]': ({ images }) => images,

  'artists: [Artist]': async(album) => {
    const artists = album.artists.map(({ id }) => spotify.getArtist(id))
    const result = await Promise.all(artists)
    return result.map(item => item.body)
  },

  'tracks: [Track]': async(album) => {
    const data = await loaderTracksByAlbum.load(album.id)
    const items = get(data, 'items', [])
    return items
  },

  Query: {
    'getAlbums(name: String!): [Album]': async(_, { name }) => {
      const data = await loaderAlbum.load(name)
      const items = get(data, 'albums.items', [])
      return items
    },
  },
})


module.exports = { Album }
