import { Component } from 'react';
import PropTypes from 'prop-types';
import { noop } from 'lodash';

export default class Input extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func,
  }

  static defaultProps = {
    name: '',
    placeholder: '',
    type: 'text',
    className: '',
    onChange: noop,
  }

  constructor() {
    super();
  }

  onChange(event) {
    const value = event.target.value;
    const { onChange } = this.props;
    onChange(value);
  }

  render() {
    const { name, placeholder, value, type, className } = this.props;

    return (
       <div className={'Input'}>
         <input className={className}
                onChange={this.onChange.bind(this)}
                name={name}
                value={value}
                placeholder={placeholder}
                type={type} />
       </div>
    );
  }
}
