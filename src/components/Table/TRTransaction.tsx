import React from 'react'
import classNames from 'classnames'
import { ITRComponent } from './TableData'
import { useModalContext } from '../Modal/ModalContext'
import TransactionModal from '../Modal/TransactionModal'

let date = ''

export default function TRTransaction({ row, cells, index }: ITRComponent) {
  const { openModal } = useModalContext()
  const modal = <TransactionModal {...row} />
  const separated = date !== row['date']
  date = row['date']
  return (
    <tr tabIndex={index + 4} className={classNames('cursor-pointer', { separated })} onClick={() => openModal(modal)}>
      {cells.map((cell, key) => (
        <td key={key}>{cell}</td>
      ))}
    </tr>
  )
}
