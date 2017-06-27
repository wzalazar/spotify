import { Component } from 'react';
import PropTypes from 'prop-types';
import NavigationBar from '../NavigationBar/NavigationBar';
import Line from '../Line/Line';

export default class Layout extends Component {

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.element),
      PropTypes.object,
    ]),
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
      <div className={'Layout ' + className}>
        <div className={'Layout__cover ' + className} />
        <NavigationBar />
        {children}
        <Line />
      </div>
    );
  }
}
