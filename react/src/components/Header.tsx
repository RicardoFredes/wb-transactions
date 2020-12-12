import React from 'react'
import Logo from './Logo'

export default function Header() {
  return (
    <header id="header" className="px-auto">
      <Logo />
      <strong className="title">Transations</strong>
    </header>
  )
}
