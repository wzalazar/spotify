import { useState } from 'react'
import { noop } from 'lodash'

import { Album } from '../Album/Album'
import { H2 } from '../H2/H2'

const convertTime = (ms) => {
  const minutes = Math.floor(ms / 60000)
  const seconds = ((ms % 60000) / 1000).toFixed(0)
  return `${minutes}:${(seconds < 10 ? '0' : '') + seconds}`
}

export const ListTrack = ({ items, image, name, onClick = noop }) => {
  const [active, setActive] = useState('')

  const trigger = (track) => {
    setActive({ active: track._id })
    onClick(track)
  }

  return (
    <div className={'ListTrack'}>
      <H2 className={'show_tablet'}>Tracks</H2>
      <div className={'ListTrack__album'}>
        <Album image={image}
          name={name}
          onClick={trigger} />
      </div>
      <div className={'ListTrack__tracks'}>
        <H2 className={'hide_table'}>Tracks</H2>
        <ul className={'Track'}>
          { items.map((track, key) =>
            <li key={key} className={'Track__list'} onClick={() => trigger(track)}>
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
              <div className={'Track__list__duration spotify-light'}>{convertTime(track.duration_ms)}</div>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}
