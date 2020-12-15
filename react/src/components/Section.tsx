import React from 'react'
import classNames from 'classnames'

export default function Section({ children, className = '', ...props }) {
  return <section className={classNames('px-auto py-auto', className)} {...props}>{children}</section>
}
