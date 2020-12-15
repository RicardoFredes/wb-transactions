import React, { useEffect, useState } from 'react'
import BasicTemplate from '../components/BasicTemplate'
import mock from '../data/mock.json'
import { parseTransations, transactionOptions } from '../helpers/transations'
import TableData from '../components/Table/TableData'
import TRTransaction from '../components/Table/TRTransaction'
import SearchFilter from '../components/Form/SearchFilter'
import Section from 'components/Section'

const showKeys = [
  { value: 'title', label: 'Título' },
  { value: 'description', label: 'Descrição' },
  { value: 'statusLabel', label: 'Status' },
  { value: 'price', label: 'Valor' }
]

export default function Index() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const newData = parseTransations(mock) as []
    setData(newData)
    setLoading(false)
  }, [])

  return (
    <BasicTemplate seo={{ title: 'Warren Brasil | Transations', description: '' }}>
      <Section>
        {loading 
          ? 'Carregando transações...'
          : data.length > 0 
            ? <Content originalData={data} />
            : 'Você ainda não tem transações.'
        }
      </Section>
    </BasicTemplate>
  )
}

function Content({ originalData }) {
  const [data, setData] = useState(originalData)
  return (
    <>
      <SearchFilter data={originalData} setData={setData} options={transactionOptions} />
      {data.length > 0 ? (
        <div id="transactions overflow-x-auto">
          <TableData data={data} showKeys={showKeys} TRComponent={TRTransaction} />
        </div>
      ) : 'Nenhuma transação encontrada.'}
    </>
  )
}

