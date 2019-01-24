import { get, noop } from 'lodash'
import { Album } from '../Album/Album'
import { H2 } from '../H2/H2'

export const ListAlbum = ({ items = [], onClick = noop }) => (
  <div className={'ListAlbum'}>
    <H2>Albums</H2>
    { items.map((album, key) =>
      <Album key={key}
        name={album.name}
        image={get(album, 'images[1].url', '')}
        onClick={() => onClick(album)} />
    )}
  </div>
)
