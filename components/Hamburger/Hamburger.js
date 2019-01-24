import { useState } from 'react'
import { noop } from 'lodash'

export const Hamburguer = ({ onClick = noop }) => {
  const [isCollapse, toggle] = useState(true)

  const onToggle = () => {
    onClick(!isCollapse)
    toggle(!isCollapse)
  }

  return (
    <button className={'Hamburger hamburger hamburger--collapse js-hamburger ' + ( isCollapse ? '' : 'is-active' ) } type="button" onClick={() => onToggle()}>
      <span className="hamburger-box">
        <span className="hamburger-inner"/>
      </span>
    </button>
  )
}
