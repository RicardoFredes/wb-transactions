import React from 'react'

export interface IStatusNotification {
  image?: string
  title: string
  description?: string
}

export default function StatusNotification({ image, title, description }: IStatusNotification) {
  return (
    <div>
      {image && <img src={image} alt={title} height={96} />}
      <h3>{title}</h3>
      {description && <p>{description}</p>}
    </div>
  )
}
