export const getArtist = `
  query getArtist($artist: String!) {
    artist(name: $artist) {
     _id
     name
     image {
       height
       width
       url
     }
     album {
       _id
       name
       album_type
       type
       image {
         _id
         height
         width
         url
       }
     }
    }
  }
`;
