import { Component } from 'react';
import PropTypes from 'prop-types';
import { get, noop } from 'lodash';

export default class Breadcrumb extends Component {
  static propTypes = {
    items: PropTypes.array,
  }

  static defaultProps = {
    items: [],
  }

  constructor() {
    super();
  }

  onClick(item) {
    item.onClick();
  }

  render() {
    const { items } = this.props;

    return (
      <nav className={'Breadcrumb'}>
        <ul className={'Breadcrumb__list'}>
        { items.map((item, key) =>
          <li className={'Breadcrumb__list__item'} key={key}>
            <a className={'Breadcrumb__link spotify-light ' + (get(item, 'active', false) ? 'active' : '')} onClick={this.onClick.bind(this, item)}>{item.label}</a>
          </li>
        )}
        </ul>
      </nav>
    );
  }
}
