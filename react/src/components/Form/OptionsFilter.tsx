import React from 'react'

export default function OptionsFilter({ data, setData, options = [], fieldName = '', ...props }) {
  const handleChange = (event) => {
    const value = event.targe.value
    console.log(value)
  }

  return (
    <select {...props} onChange={handleChange}>
      {options.map(({ value, label }, key) => (
        <option key={key} value={value}>{label}</option>
      ))}
    </select>
  )
}
