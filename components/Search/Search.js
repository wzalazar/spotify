import { noop } from 'lodash'

import { Input } from '../Input/Input'

export const Search = ({ placeholder, value, onChange = noop }) => (
  <div className={'Search'}>
    <h4 className={'Search__title spotify-light'}>Search for an Artist</h4>
    <form>
      <Input onChange={onChange}
        className={'Search__input spotify-bold'}
        placeholder={placeholder}
        value={value} />
    </form>
  </div>
)
