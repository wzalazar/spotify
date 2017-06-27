import { property, graphQl, query, hasMany } from '@graphite/decorators';
import { get } from 'lodash';
import spotify from '../api/spotify';
import artists from './Artists';
import tracks from './Tracks';
import { loaderTracksByAlbum, loaderAlbum } from '../loaders';

@graphQl
class Album {
  @property('String | required')
  name;

  /* eslint-disable camelcase */
  @property('String | required')
  album_type
  /* eslint-enable camelcase */

  @property('String | required')
  type

  @hasMany
  async image({ images }) {
    try {
      return images;
    } catch (error) {
      return error;
    }
  }

  @hasMany
  async artist(album) {
    try {
      return album.artists.map(async ({ id }) => {
        const newArtist = await spotify.getArtist(id);
        return artists.mapArtist(newArtist);
      });
    } catch (error) {
      return error;
    }
  }

  @hasMany
  async track(album) {
    try {
      const data = await loaderTracksByAlbum.load(album.id);
      const items = get(data, 'items', []);
      return items.map(item => tracks.mapTrack(item));
    } catch (error) {
      return error;
    }
  }

  @query()
  async album(_, { _id }) {
    try {
      const data = await loaderAlbum.load(_id);
      const items = get(data, 'albums.items', []);
      return items.map(item => this.mapAlbum(item));
    } catch (error) {
      return error;
    }
  }

  mapAlbum(album) {
    const { id } = album;
    return Object.assign(album, { _id: id });
  }
}

export default new Album();
