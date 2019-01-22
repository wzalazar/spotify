export const getArtist = `
  query getArtists($artist: String!) {
    getArtists(artist: $artist) {
    id
    name
    images {
      height
      width
      url
    }
    albums {
      id
      name
      album_type
      type
      images {
        height
        width
        url
      }
    }
    }
  }
`;
