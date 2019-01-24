import { get } from 'lodash'

const onClick = (e, item) => {
  e.preventDefault()
  item.onClick()
}

export const Breadcrumb = ({ items = [] }) => (
  <nav className={'Breadcrumb'}>
    <ul className={'Breadcrumb__list'}>
      { items.map((item, key) =>
        <li className={'Breadcrumb__list__item'} key={key}>
          <a className={'Breadcrumb__link spotify-light ' + (get(item, 'active', false) ? 'active' : '')} onClick={(e) => onClick(e, item)}>{item.label}</a>
        </li>
      )}
    </ul>
  </nav>
)
