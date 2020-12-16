import React from 'react'
import Head from 'next/head'

export interface ISeo {
  title: string
  description: string
  image?: string
}

export default function Seo({ title, description = '', image }: Partial<ISeo>) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
    </Head>
  )
}
