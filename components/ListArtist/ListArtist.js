import { get, noop } from 'lodash'
import { Artist } from '../Artist/Artist'
import { H2 } from '../H2/H2'

export const ListArtist = ({ items = [], onClick = noop }) => (
  <div className={'ListArtist'}>
    <H2>Artists</H2>
    { items.map((artist, key) =>
      <Artist key={key}
        name={artist.name}
        image={get(artist, 'images[1].url', '')}
        onClick={() => onClick(artist)} />
    )}
  </div>
)
