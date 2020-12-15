import React from 'react'
import classNames from 'classnames'
import { TRANSACTIONS_STATUS } from '../helpers/transations'
import Arrow from './Arrow'
import Modal from './Modal'

export interface ITransactionModal {
  title: string
  from: string
  to: string
  price: string
}

export default function TransactionModal({ title, from, to, price }: Partial<ITransactionModal>) {
  return (
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
}


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
