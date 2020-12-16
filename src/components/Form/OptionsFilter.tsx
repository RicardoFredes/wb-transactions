import React from 'react'
import classNames from 'classnames'

interface IOptions {
  value: string
  label?: string
}

interface IOptionsFilter {
  options?: IOptions[]
  placeholder?: string
  onChange?: (value: string) => any
  [props: string]: any
}

export default function OptionsFilter({ options = [], placeholder, onChange, className, ...props }: IOptionsFilter) {
  const handleChange = event => {
    const value = event.target.value
    if (onChange) onChange(value)
  }

  return (
    <select {...props} className={classNames(className, { default: !props.value })} onChange={handleChange}>
      <option value="" className="select-placeholder">
        {placeholder}
      </option>
      {options.map(({ value, label }, key) => (
        <option key={key} value={value}>
          {label || value}
        </option>
      ))}
    </select>
  )
}
