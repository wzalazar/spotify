import { Component } from 'react';
import PropTypes from 'prop-types';

export default class H2 extends Component {

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
      <h2 className={'H2 spotify-bold ' + className}>{children}</h2>
    );
  }
}
