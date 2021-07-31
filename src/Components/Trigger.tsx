import React, { useContext } from 'react'
import { AppContext } from '../Context'
import { TriggerProps } from '..'

export function Trigger({
  component = 'button',
  className = 'offcanvas-trigger',
  styles = {},
  children
}: TriggerProps) {
  const { handleOpen, randomId } = useContext(AppContext)

  return component === 'button' ? (
    <button
      type='button'
      className={className}
      onClick={handleOpen}
      style={styles}
      tabIndex={0}
      aria-controls={`offcanvas_${randomId}`}
    >
      {children || 'Offcanvas Trigger'}
    </button>
  ) : (
    <div
      className={className}
      onClick={handleOpen}
      style={styles}
      role='button'
      tabIndex={0}
      aria-controls={`offcanvas_${randomId}`}
      aria-hidden='true'
    >
      {children || 'Offcanvas Trigger'}
    </div>
  )
}
