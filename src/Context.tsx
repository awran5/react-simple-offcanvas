import React, { createContext, useState } from 'react'

interface ContextProps {
  isOpen?: boolean
  handleOpen?: () => void
  handleClose?: () => void
  randomId?: string
}

export const AppContext = createContext<ContextProps>({
  isOpen: false
})

interface ProviderProps {
  children: React.ReactNode
  onOpen?: () => void
  onClose?: () => void
}

export function OffcanvasProvider({
  children,
  onOpen,
  onClose
}: ProviderProps): JSX.Element {
  const [isOpen, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
    if (onOpen) onOpen()
  }
  const handleClose = () => {
    setOpen(false)
    if (onClose) onClose()
  }
  const randomId = window.crypto
    .getRandomValues(new Uint32Array(1))[0]
    .toString(36)

  return (
    <AppContext.Provider value={{ isOpen, handleOpen, handleClose, randomId }}>
      <div className="simple-offcanvas-component">{children}</div>
    </AppContext.Provider>
  )
}
