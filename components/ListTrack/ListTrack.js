import { Component } from 'react'
import PropTypes from 'prop-types'
import { Album } from '../Album/Album'
import { get, noop } from 'lodash'
import { H2 } from '../H2/H2'

export default class ListTrack extends Component {
  static propTypes = {
    items: PropTypes.array,
    onClick: PropTypes.func,
    image: PropTypes.string,
    name: PropTypes.string,
  }

  static defaultProps = {
    items: [],
    onClick: noop,
    image: '',
    name: '',
  }

  constructor() {
    super()
    this.state = {
      active: '',
    }
  }

  onClick(track) {
    const { onClick } = this.props
    this.setState({ active: track._id })
    onClick(track)
  }

  render() {
    const { items, image, name } = this.props
    const { active } = this.state
    const firstTrack = get(items, '[0]', { _id: '' })

    return (
      <div className={'ListTrack'}>
        <H2 className={'show_tablet'}>Tracks</H2>
        <div className={'ListTrack__album'}>
          <Album image={image}
            name={name}
            onClick={this.onClick.bind(this, firstTrack)} />
        </div>
        <div className={'ListTrack__tracks'}>
          <H2 className={'hide_table'}>Tracks</H2>
          <ul className={'Track'}>
            { items.map((track, key) =>
              <li key={key} className={'Track__list'} onClick={this.onClick.bind(this, track)}>
                <div className={'Track__list__number spotify-light'}>
                  <div className={'Track__list__number__item ' + ( active === track._id ? 'active' : '')}>
                    {key + 1}.
                  </div>
                  <div className={'Track__list__number__icon ' + ( active === track._id ? 'active' : '')}>
                    <svg viewBox="0 0 85 100">
                      <path fill="currentColor" d="M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z">
                        <title>PLAY</title>
                      </path>
                    </svg>
                  </div>
                </div>
                <div className={'Track__list__description spotify-light'}>{track.name}</div>
                <div className={'Track__list__duration spotify-light'}>{this.convertTime(track.duration_ms)}</div>
              </li>
            )}
          </ul>
        </div>
      </div>
    )
  }

  convertTime(ms) {
    const minutes = Math.floor(ms / 60000)
    const seconds = ((ms % 60000) / 1000).toFixed(0)
    return `${minutes}:${(seconds < 10 ? '0' : '') + seconds}`
  }
}
