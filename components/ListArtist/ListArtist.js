// import { Component } from 'react'
// import PropTypes from 'prop-types'
import { get, noop } from 'lodash'
import Artist from '../Artist/Artist'
import {H2} from '../H2/H2'

// export default class ListArtist extends Component {
//   static propTypes = {
//     items: PropTypes.array,
//     onClick: PropTypes.func,
//   }

//   static defaultProps = {
//     items: [],
//     onClick: noop,
//   }

//   constructor() {
//     super()
//   }

//   onClick(artist) {
//     const { onClick } = this.props
//     onClick(artist)
//   }

//   render() {
//     const { items, onClick } = this.props

//     return (
//       <div className={'ListArtist'}>
//         <H2>Artists</H2>
//         { items.map((artist, key) =>
//           <Artist key={key}
//             name={artist.name}
//             image={get(artist, 'images[1].url', '')}
//             onClick={onClick.bind(this, artist)} />
//         )}
//       </div>
//     )
//   }
// }

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
