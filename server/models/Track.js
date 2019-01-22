import { GraphQL } from '@graphite/server'

import { get } from 'lodash'
import spotify from '../api/spotify'
import { loaderTracks } from '../loaders';

export const Track = GraphQL('Track')({
  id: ['ID'],
 name: ['String'],
 'disc_number': ['String'],
 'duration_ms': ['String'],
 'track_number': ['String'],
 'preview_url': ['String'],

  'artists: [Artist]': async (track) => {
    const artists = track.artists.map(({ id }) => spotify.getArtist(id))
    const result = await Promise.all(artists)
    return result.map(item => item.body)
  },

  Query: {
    'getTracks(name: String!): [Track]': async (_, { name }) => {
      const data = await loaderTracks.load(name);
      return get(data, 'tracks.items', []);
    },

    'getTracksByAlbum(id: ID!): [Track]': async(_, { id }) => {
      const data = await spotify.getTracksByAlbum(id)
      return get(data, 'body.items', [])
    },
  }
})
