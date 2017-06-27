import { Component } from 'react';
import PropTypes from 'prop-types';
import { noop } from 'lodash';

export default class Hamburguer extends Component {

  static propTypes = {
    onClick: PropTypes.func,
  }

  static defaultProps = {
    onClick: noop,
  }

  constructor() {
    super();
    this.state = {
      isCollapse: true,
    };
  }

  onClick() {
    const { onClick } = this.props;
    const { isCollapse } = this.state;
    this.setState({ isCollapse: !isCollapse });
    onClick(!isCollapse);
  }

  render() {
    const { isCollapse } = this.state;

    return (
      <button className={'Hamburger hamburger hamburger--collapse js-hamburger ' + ( isCollapse ? '' : 'is-active' ) } type="button" onClick={this.onClick.bind(this)}>
        <span className="hamburger-box">
          <span className="hamburger-inner"/>
        </span>
      </button>
    );
  }
}
