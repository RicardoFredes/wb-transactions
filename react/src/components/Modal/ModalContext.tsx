import React, { createContext, useContext, useState } from 'react'

interface IContextModal {
  isOpened: boolean
  openModal(content: any): void
  closeModal(): void
}

export const ModalContext = createContext<IContextModal>({
  isOpened: false,
  openModal: () => {},
  closeModal: () => {},
})

export default function ModalProvider({ children }: any) {
  const [isOpened, setOpened] = useState(false)
  const [modalContent, setModalContent] = useState(null)

  const openModal = (content: any) => {
    setModalContent(content)
    setOpened(true)
  }

  const closeModal = () => setOpened(false)

  return (
    <ModalContext.Provider value={{ isOpened, openModal, closeModal }}>
      {children}
      {isOpened && modalContent}
    </ModalContext.Provider>
  )
}

export const useModalContext = (): IContextModal => useContext(ModalContext)
