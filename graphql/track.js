export const getTrack = `
query getTrackByAlbum($album: ID!) {
  getTracksByAlbum(id: $album) {
   id
   name
   disc_number
   duration_ms
   track_number
   preview_url
  }
}
`;
