const DataLoader = require('dataloader')
const spotify = require('./api/spotify')

const loaderSearchArtist = new DataLoader(async(keys) => {
  return Promise.all(keys.map(async(key) => {
    const response = await spotify.searchArtist(key)
    return await response.body
  }))
})

const loaderAlbumsByArtist = new DataLoader(async(keys) => {
  return Promise.all(keys.map(async(key) => {
    const response = await spotify.getAlbumsByArtist(key)
    return await response.body
  }))
})


const loaderTracksByAlbum = new DataLoader(async(keys) => {
  return Promise.all(keys.map(async(key) => {
    const response = await spotify.getTracksByAlbum(key)
    return await response.body
  }))
})

const loaderAlbum = new DataLoader(async(keys) => {
  return Promise.all(keys.map(async(key) => {
    const response = await spotify.searchAlbum(key)
    return await response.json()
  }))
})

const loaderTracks = new DataLoader(async(keys) => {
  return Promise.all(keys.map(async(key) => {
    const response = await spotify.searchTracks(key)
    return await response.body
  }))
})

module.exports = {
  loaderSearchArtist,
  loaderAlbumsByArtist,
  loaderTracksByAlbum,
  loaderAlbum,
  loaderTracks,
}
