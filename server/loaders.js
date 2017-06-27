import spotify from './api/spotify';
import DataLoader from 'dataloader';


export const loaderSearchArtist = new DataLoader(async (keys) => {
  return Promise.all(keys.map(async (key) => {
    const response = await spotify.searchArtist(key);
    return await response.body;
  }));
});

export const loaderAlbumsByArtist = new DataLoader(async (keys) => {
  return Promise.all(keys.map(async (key) => {
    const response = await spotify.getAlbumsByArtist(key);
    return await response.body;
  }));
});


export const loaderTracksByAlbum = new DataLoader(async (keys) => {
  return Promise.all(keys.map(async (key) => {
    const response = await spotify.getTracksByAlbum(key);
    return await response.body;
  }));
});

export const loaderAlbum = new DataLoader(async (keys) => {
  return Promise.all(keys.map(async (key) => {
    const response = await spotify.spotify.searchAlbum(key);
    return await response.json();
  }));
});
