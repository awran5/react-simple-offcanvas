import React, { createContext, useReducer } from 'react'
import { ProviderProps } from '.'

type State = {
  isOpen: boolean
}

type Action = { type: 'open' } | { type: 'close' }

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'open':
      return {
        isOpen: true
      }
    case 'close':
      return {
        isOpen: false
      }
    default:
      return state
  }
}

const randomId = window.crypto.getRandomValues(new Uint32Array(1))[0].toString(36)

interface ContextProps {
  isOpen?: boolean
  handleOpen?: () => void
  handleClose?: () => void
  randomId: string
}

export const AppContext = createContext<ContextProps>({
  isOpen: false,
  randomId: ''
})

export function OffcanvasProvider({ children, onOpen, onClose }: ProviderProps) {
  const [{ isOpen }, dispatch] = useReducer(reducer, {
    isOpen: false
  })

  const handleOpen = () => {
    dispatch({ type: 'open' })
    if (onOpen) onOpen()
  }
  const handleClose = () => {
    dispatch({ type: 'close' })
    if (onClose) onClose()
  }

  return (
    <AppContext.Provider value={{ isOpen, handleOpen, handleClose, randomId }}>
      <div className='simple-offcanvas-component'>{children}</div>
    </AppContext.Provider>
  )
}
