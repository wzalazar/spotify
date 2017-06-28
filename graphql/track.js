export const getTrack = `
  query getTrackByAlbumId($album: String!) {
    tracksByAlbumId(id: $album) {
      _id
     name
     disc_number
     duration_ms
     track_number
     preview_url
    }
  }
`;
