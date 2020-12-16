import React from 'react'

interface IInputFilter {
  onChange?: (value: string) => any
  [props: string]: any
}

export default function InputFilter({ onChange, ...props }: IInputFilter) {
  const handleChange = event => {
    const value = event.target.value
    if (onChange) onChange(value)
  }

  return <input type="text" onChange={handleChange} autoComplete="off" {...props} />
}
