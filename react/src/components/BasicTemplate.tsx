import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Seo, { ISeo } from './Seo'

interface IBasicTemplate {
  seo: ISeo
  children: any
}

export default function BasicTemplate({ seo, children }: Partial<IBasicTemplate>) {
  return (
    <>
      <Seo {...seo} />
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}
