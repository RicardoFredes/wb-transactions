import React, { useEffect, useState } from 'react'
import { compareSentenceAndValue } from 'helpers/strings'
import InputFilter from './InputFilter'
import OptionsFilter from './OptionsFilter'

export default function SearchFilter({ data, setData, options }) {
  const [text, setText] = useState('')
  const [status, setStatus] = useState('')

  const reset = () => {
    setText('')
    setStatus('')
  }

  useEffect(() => {
    const newData = data.filter(element => {
      const hasStatus = !status || element.status === status
      const hasSentence = !text || compareSentenceAndValue(element.title, text)
      return hasStatus && hasSentence
    })
    setData(newData)
  }, [text, status])

  return (
    <div id="filter" className="mb-1x">
      <InputFilter tabIndex={1} placeholder="Pesquisar por título" value={text} onChange={setText} />
      <OptionsFilter
        tabIndex={2}
        options={options}
        placeholder="Filtrar por status"
        value={status}
        onChange={setStatus}
      />
      <button tabIndex={3} onClick={reset}>
        Limpar filtros
      </button>
    </div>
  )
}
