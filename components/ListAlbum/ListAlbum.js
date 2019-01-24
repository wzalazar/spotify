import { Component } from 'react'
import PropTypes from 'prop-types'
import { get, noop } from 'lodash'
import Album from '../Album/Album'
import {H2} from '../H2/H2'

export default class ListAlbum extends Component {
  static propTypes = {
    items: PropTypes.array,
    onClick: PropTypes.func,
  }

  static defaultProps = {
    items: [],
    onClick: noop,
  }

  constructor() {
    super()
  }

  onClick(album) {
    const { onClick } = this.props
    onClick(album)
  }

  render() {
    const { items, onClick } = this.props

    return (
      <div className={'ListAlbum'}>
        <H2>Albums</H2>
        { items.map((album, key) =>
          <Album key={key}
            name={album.name}
            image={get(album, 'images[1].url', '')}
            onClick={onClick.bind(this, album)} />
        )}
      </div>
    )
  }
}
