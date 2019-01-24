
import { noop } from 'lodash'

const trigger = (event, callback) => {
  const value = event.target.value
  callback(value)
}

export const Input = ({ name = '', placeholder = '', value = '', type = 'text', className = '', onChange = noop }) => (
  <div className={'Input'}>
    <input className={className}
      onChange={(e) => trigger(e, onChange)}
      name={name}
      value={value}
      placeholder={placeholder}
      type={type} />
  </div>
)
