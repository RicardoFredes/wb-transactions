import React from 'react'
import { ITRComponent } from './TableData'
import { useModalContext } from './ModalContext'
import TransactionModal from './TransactionModal'

export default function TransactionTR({ row, cells }: ITRComponent) {
  const { openModal } = useModalContext()
  const modal = <TransactionModal {...row} />
  return (
    <tr onClick={() => openModal(modal)}>
      {cells.map((cell, key) => (
        <td key={key}>
          {cell}
        </td>
      ))}
    </tr>
  )
}
