import React, { useEffect, useState } from 'react'
import BasicTemplate from '../components/BasicTemplate'
import { transactionOptions, STATUS_NOTIFICATIONS } from '../helpers/transations'
import TableData from '../components/Table/TableData'
import TRTransaction from '../components/Table/TRTransaction'
import SearchFilter from '../components/Form/SearchFilter'
import Section from '../components/Section'
import StatusNotification from '../components/StatusNotification'
import { getTransactions } from '../helpers/api'

const showKeys = [
  { value: 'title', label: 'Título' },
  { value: 'description', label: 'Descrição' },
  { value: 'statusLabel', label: 'Status' },
  { value: 'price', label: 'Valor' },
]

export default function Index() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    setLoading(true)
    getTransactions()
      .then(setData)
      .catch(() => setHasError(true))
      .then(() => setLoading(false))
  }, [])

  return (
    <BasicTemplate seo={{ title: 'Warren Brasil | Transations', description: '' }}>
      <Section>
        {hasError ? (
          showNotification(STATUS_NOTIFICATIONS.error)
        ) : loading ? (
          showNotification(STATUS_NOTIFICATIONS.loading)
        ) : data.length === 0 ? (
          showNotification(STATUS_NOTIFICATIONS.empty)
        ) : (
          <Content originalData={data} />
        )}
      </Section>
    </BasicTemplate>
  )
}

function showNotification(props) {
  return <StatusNotification {...props} />
}

function Content({ originalData }) {
  const [data, setData] = useState(originalData)
  return (
    <>
      <SearchFilter data={originalData} setData={setData} options={transactionOptions} />
      {data.length > 0 ? (
        <div id="transactions">
          <div className="overflow-x-auto">
            <TableData data={data} showKeys={showKeys} TRComponent={TRTransaction} />
          </div>
        </div>
      ) : (
        showNotification(STATUS_NOTIFICATIONS.notFound)
      )}
    </>
  )
}
