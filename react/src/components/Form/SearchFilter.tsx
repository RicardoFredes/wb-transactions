import React, { useEffect, useState } from 'react';
import { compareSentenceAndValue } from 'helpers/strings';
import InputFilter from './InputFilter';
import OptionsFilter from './OptionsFilter';

export default function SearchFilter({ data, setData, options }) {
  const [text, setText] = useState('')
  const [status, setStatus] = useState('')

  useEffect(() => {
    const newData = data.filter((element) => {
      const hasStatus = !status || element.status === status
      const hasSentence = !text || compareSentenceAndValue(element.title, text)
      return hasStatus && hasSentence
    })
    setData(newData)
  }, [text, status])

  return (
    <div className="mb-1x">
      <InputFilter placeholder="Pesquisar por título" onChange={setText} />
      <OptionsFilter options={options} placeholder="Filtrar por status" onChange={setStatus} />
    </div>
  );
}
