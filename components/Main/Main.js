import { Component } from 'react';
import PropTypes from 'prop-types';

export default class Main extends Component {

  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.element),
      PropTypes.object,
    ]),
    items: PropTypes.array,
    model: PropTypes.string,
  }

  constructor() {
    super();
  }

  render() {
    const { children } = this.props;
    return (
      <div className={'Main'}>
        {children}
      </div>
    );
  }
}
