import React from 'react'
import classNames from 'classnames'
import BasicTemplate from 'components/BasicTemplate'
import mock from '../data/mock.json'
import { parseTransations, TRANSACTIONS_STATUS } from 'helpers/transations'
import TableData, { ITRComponent } from 'components/TableData'
import Modal from 'components/Modal'
import Arrow from 'components/Arrow'

const json = {
  data: parseTransations(mock),
  showKeys: [
    { name: 'title', label: 'Título' },
    { name: 'description', label: 'Descrição' },
    { name: 'statusLabel', label: 'Status' },
    { name: 'price', label: 'Valor' }
  ],
  TRComponent,
}

export default function Index() {
  return (
    <BasicTemplate seo={{ title: 'Warren Brasil | Transations', description: '' }}>
      <section className="px-auto py-auto overflow-x-auto">
        <div id="transactions">
          <TableData {...json} />
        </div>
      </section>
      <TransactionModal />
    </BasicTemplate>
  )
}

const TransactionModal = ({ title, from, to, price }: any) => (
  <Modal className="transaction-modal">
    <h3 className="title">{title}</h3>
    <StepsProgress steps={Object.values(TRANSACTIONS_STATUS)} currentStepIndex={1} />
    <div className="transaction">
      <div>
        <span className="label">De</span>
        <h4 className="name">{from}</h4>
      </div>
      <Arrow fill="#999" />
      <div className="price">
        {price}
      </div>
      <Arrow fill="#999" />
      <div>
        <span className="label">Para</span>
        <h4 className="name">{to}</h4>
      </div>
    </div>
  </Modal>
)

function StepsProgress({ steps = [], currentStepIndex = 0 }) {
  return (
    <div className="steps-progress">
      <div className="steps">
        {steps.map((step, key) => (
          <span className={classNames({ completed: currentStepIndex >= key })} key={key}>{step}</span>
        ))}
      </div>
    </div>
  )
}

function TRComponent({ row, cells }: ITRComponent) {
  return (
    <tr onClick={() => console.log(row)}>
      {cells.map((cell, key) => (
        <td key={key}>
          {cell}
        </td>
      ))}
    </tr>
  )
}
 
