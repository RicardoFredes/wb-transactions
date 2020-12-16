import React from 'react'
import type { AppProps } from 'next/app'
import '../styles/index.scss'
import ModalProvider from 'components/Modal/ModalContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ModalProvider>
      <Component {...pageProps} />
    </ModalProvider>
  )
}
