import { Offcanvas } from './Components/Offcanvas'
import { Trigger } from './Components/Trigger'
import { OffcanvasProvider } from './Context'

export { OffcanvasProvider, Trigger, Offcanvas }

export declare type Position = 'left' | 'right' | 'top' | 'bottom'
export declare type Component = 'button' | 'div'

export declare interface ProviderProps {
  children: React.ReactNode
  onOpen?: () => void
  onClose?: () => void
}
export declare interface TriggerProps {
  component?: Component
  className?: string
  styles?: React.CSSProperties
  children?: React.ReactNode
}

export declare interface OffcanvasProps extends TriggerProps {
  title?: string
  position?: Position
  backdrop?: boolean
  allowClickAway?: boolean
  allowEsc?: boolean
  allowScroll?: boolean
}
