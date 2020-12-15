import React, { useState } from 'react'
import { compareSentenceAndValue } from 'helpers/strings'

export default function InputFilter({ data, setData, defaultValue = '', ...props }) {
  const [value, setValue] = useState(defaultValue)

  const handleChange = event => {
    const valueField = event.target.value
    setValue(valueField)
    const newData = data.filter(({ title }) => compareSentenceAndValue(title, valueField))
    setData(newData)
  }

  return <input {...props} type="text" defaultValue={value} onChange={handleChange} autoComplete="off" />
}
