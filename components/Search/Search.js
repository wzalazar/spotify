import { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input/Input';
import { noop } from 'lodash';

export default class Search extends Component {

  static propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
  }

  static defaultProps = {
    onChange: noop,
  }

  constructor() {
    super();
  }

  render() {
    const { placeholder, value, onChange } = this.props;

    return (
      <div className={'Search'}>
        <h4 className={'Search__title spotify-light'}>Search for an Artist</h4>
        <form>
          <Input onChange={onChange}
                 className={'Search__input spotify-bold'}
                 placeholder={placeholder}
                 value={value} />
        </form>
      </div>
    );
  }
}
