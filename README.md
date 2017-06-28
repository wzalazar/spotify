[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/wzalazar/spotify/tree/master)


# Spotify GraphiteJS

Example with GraphiteJS, framework graphql. In this example, you will able to search an artist, select artist, select album, and play the preview track.

## How to use

Download the example [or clone the repo](https://github.com/wzalazar/spotify):


Install it and run:

```bash
npm install
npm run start:dev
```

```bash
yarn
yarn start:dev
```

**URL default http://localhost:3000**


## Demo

Latest deploy [view](https://spotify-graphitejs-scbvotbkhb.now.sh)

## Stack technology

  1. NextJS [View](https://github.com/zeit/next.js/)
  2. React [View](https://github.com/facebook/react)
  3. Redux [View](https://github.com/reactjs/redux)
  4. Redux Observable [View](https://github.com/redux-observable/redux-observable)
  4. GraphiteJS [View](https://github.com/graphitejs/graphitejs)


## Architecture

  The design the architecture is [here](https://github.com/wzalazar/spotify/blob/master/.uml/architecture.png)


## Commands

```bash

yarn **command**

```


| Command          | Description                                                                           |
| ---------------- |:--------------------------------------------------------------------------------------|
| test             | Run all test                                                                          |
| coverage         | Report coverage the all files. Terminal or folder in .coverage/lcov-report/index.html |
| lint             | Linting project                                                                       |  
| start            | Run project production, required build                                                |  
| start:dev        | Run project development                                                               |
| build            | Generate build                                                                        |


## GraphQl [view](https://spotify-graphitejs-scbvotbkhb.now.sh/graphiql


### Queries

```bash

query getArtist($artist: String!) {
    artist(name: $artist) {
        _id
        name
    }
}

query getAlbum($album: String!) {
    album(name: $album) {
        _id
        name
    }
}

query getTrack($track: String!) {
    track(name: $track) {
        _id
        name
    }
}

query getTracksByAlbum($albumId: String!) {
    tracksByAlbumId(id: $albumId) {
        _id
        name
    }
}


```

### Variables

```bash

{
  "artist": "Shakira",
  "album": "show",
  "track": "Hi",
  "albumId": "2cWBwpqMsDJC1ZUwz813lo"
}

```




Deploy it to the cloud with [now](https://zeit.co/now) ([download](https://zeit.co/download))

```bash
now
```


## License

[MIT](https://github.com/babel/babel/blob/master/LICENSE)
