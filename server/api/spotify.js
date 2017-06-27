import SpotifyWebApi from 'spotify-web-api-node';
require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';

class Spotify {
  constructor(clientId, clientSecret, redirectUri) {
    this.spotifyApi = new SpotifyWebApi({ clientId, clientSecret, redirectUri });
    this.token = false;
    this.requestToken();
  }

  async requestToken() {
    try {
      const data = await this.spotifyApi.clientCredentialsGrant();
      this.token = data.body.access_token;
      this.setToken(data.body.access_token);
      return data;
    } catch (error) {
      return error;
    }
  }

  setToken(token) {
    this.spotifyApi.setAccessToken(token);
  }

  getToken() {
    return this.token;
  }

  async getArtist(artistId, options) {
    try {
      await this.requestToken();
      return this.spotifyApi.getArtist(artistId, options);
    } catch (error) {
      return error;
    }
  }

  async getAlbumsByArtist(artistId, options) {
    try {
      await this.requestToken();
      return this.spotifyApi.getArtistAlbums(artistId, options);
    } catch (error) {
      return error;
    }
  }

  async getTracksByAlbum(albumId, options) {
    try {
      await this.requestToken();
      return this.spotifyApi.getAlbumTracks(albumId, options);
    } catch (error) {
      return error;
    }
  }

  async searchArtist(word, options) {
    try {
      await this.requestToken();
      return this.spotifyApi.searchArtists(word, options);
    } catch (error) {
      return error;
    }
  }

  async searchAlbum(word, options) {
    try {
      await this.requestToken();
      const { limit, offset } = options;
      return fetch(`https://api.spotify.com/v1/search?q=${word}&type=album&limit=${limit}&offset=${offset}`, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + this.getToken(),
        },
      });
    } catch (error) {
      return error;
    }
  }

  async searchTracks(word, options) {
    try {
      await this.requestToken();
      return this.spotifyApi.searchTracks(word, options);
    } catch (error) {
      return error;
    }
  }
}

export default new Spotify(
  '62c1377ce77e4c6f818760fb761a177a',
  '404a1014b29a48d0898517f9091c1d69',
  'http://localhost:3000'
);
