import { property, graphQl, query, hasMany } from '@graphite/decorators';
import { get } from 'lodash';
import albums from './Albums';
import { loaderSearchArtist, loaderAlbumsByArtist } from '../loaders';

@graphQl
class Artist {
  @property('String')
  name;

  @property('[String]')
  genres

  @property('String')
  popularity;

  @property('String')
  type

  @property('String')
  followers

  @hasMany
  async image(artist) {
    try {
      return get(artist, 'images', null);
    } catch (error) {
      return error;
    }
  }

  @hasMany
  async album({ id }) {
    try {
      const data = await loaderAlbumsByArtist.load(id);
      const items = get(data, 'items', []);
      return items.map(item => albums.mapAlbum(item));
    } catch (error) {
      return error;
    }
  }

  @query('name: String!')
  async artist(_, { name }) {
    try {
      const data = await loaderSearchArtist.load(name);
      const items = get(data, 'artists.items', []);
      return items.map(artist => this.mapArtist(artist));
    } catch (error) {
      return error;
    }
  }

  mapArtist(artist = {}) {
    const followers = get(artist, 'followers.total', '0');
    const id = get(artist, 'id', '');
    return Object.assign(artist, { _id: id, followers });
  }
}

export default new Artist();
