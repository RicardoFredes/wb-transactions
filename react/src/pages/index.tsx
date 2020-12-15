import React from 'react'
import BasicTemplate from 'components/BasicTemplate'
import mock from '../data/mock.json'
import { parseTransations } from 'helpers/transations'
import TableData from 'components/TableData'
import TransactionTR from 'components/TransactionTR'

export default function Index() {
  const json = {
    data: parseTransations(mock),
    showKeys: [
      { name: 'title', label: 'Título' },
      { name: 'description', label: 'Descrição' },
      { name: 'statusLabel', label: 'Status' },
      { name: 'price', label: 'Valor' }
    ],
    TRComponent: TransactionTR,
  }

  return (
    <BasicTemplate seo={{ title: 'Warren Brasil | Transations', description: '' }}>
      <section className="px-auto py-auto overflow-x-auto">
        <div id="transactions">
          <TableData {...json} />
        </div>
      </section>
    </BasicTemplate>
  )
}

