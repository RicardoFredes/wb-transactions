import React, { useState } from 'react'
import classNames from 'classnames'

export default function Modal({ children, className }: any) {
  const [close, setClose] = useState(false)
  if (close) return null
  return (
    <div className={classNames('modal', className)} onClick={() => setClose(true)}>
      <div className="modal-card">
        {children}
      </div>
    </div>
  )
}
