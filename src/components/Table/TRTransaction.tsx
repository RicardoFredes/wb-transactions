import React from 'react'
import { ITRComponent } from './TableData'
import { useModalContext } from '../Modal/ModalContext'
import TransactionModal from '../Modal/TransactionModal'

export default function TRTransaction({ row, cells, index }: ITRComponent) {
  const { openModal } = useModalContext()
  const modal = <TransactionModal {...row} />
  return (
    <tr tabIndex={index + 4} className="cursor-pointer" onClick={() => openModal(modal)}>
      {cells.map((cell, key) => (
        <td key={key}>{cell}</td>
      ))}
    </tr>
  )
}
