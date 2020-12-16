import React from 'react'
import classNames from 'classnames'
import { TRANSACTIONS_STATUS, translateTransactionStatus } from '../../helpers/transations'
import Arrow from '../Icons/Arrow'
import Modal from './Modal'

export interface ITransactionModal {
  title: string
  from: string
  to: string
  price: string
  status: string
}

export default function TransactionModal({ title, from, to, price, status }: Partial<ITransactionModal>) {
  const currentStep = translateTransactionStatus(status || '')
  const steps = Object.values(TRANSACTIONS_STATUS) as []
  return (
    <Modal className="transaction-modal">
      <h3 className="title">{title}</h3>
      <StepsProgress steps={steps} currentStep={currentStep} />
      <div className="transaction">
        <div>
          <span className="label">De</span>
          <h4 className="name">{from}</h4>
        </div>
        <Arrow fill="#999" />
        <div className="price">{price}</div>
        <Arrow fill="#999" />
        <div>
          <span className="label">Para</span>
          <h4 className="name">{to}</h4>
        </div>
      </div>
    </Modal>
  )
}

function StepsProgress({ steps = [], currentStep = '' }) {
  const currentStepIndex = steps.findIndex(step => step === currentStep)
  return (
    <div className="steps-progress">
      <div className="steps">
        {steps.map((step, key) => (
          <span className={classNames({ completed: currentStepIndex >= key })} key={key}>
            {step}
          </span>
        ))}
      </div>
    </div>
  )
}
