import { Component } from 'react';
import PropTypes from 'prop-types';

export default class Text extends Component {

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.any,
  }

  static defaultProps = {
    className: '',
  }

  constructor() {
    super();
  }

  render() {
    const { children, className } = this.props;
    return (
      <p className={'Text spotify-light ' + className}>{children}</p>
    );
  }
}
