export const getTrack = `
  query getTrack($album: String) {
    track(_id: $album) {
      _id
     name
     disc_number
     duration_ms
     track_number
     preview_url
    }
  }
`;
