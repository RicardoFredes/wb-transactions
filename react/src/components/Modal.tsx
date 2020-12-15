import React from 'react'
import classNames from 'classnames'
import { useModalContext } from './ModalContext'

export interface IModal {
  children: any
  className?: string
}

export default function Modal({ children, className }: IModal) {
  const { closeModal } = useModalContext()
  return (
    <div className={classNames('modal', className)} onClick={() => closeModal()}>
      <div className="modal-card" onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}
