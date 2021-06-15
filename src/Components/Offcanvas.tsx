import React, { useContext, useEffect } from 'react'
import css from '../styles.module.css'
import { AppContext } from '../Context'

declare type Position = 'left' | 'right' | 'top' | 'bottom'

interface OffcanvasProps {
  title?: string
  position?: Position
  backdrop?: boolean
  allowClickAway?: boolean
  allowEsc?: boolean
  allowScroll?: boolean
  className?: string
  styles?: React.CSSProperties
  children?: React.ReactNode
}

export function Offcanvas({
  title = 'Offcanvas Title',
  position = 'right',
  backdrop = true,
  allowClickAway = true,
  allowEsc = true,
  allowScroll = true,
  className = 'simple-offcanvas',
  styles = {},
  children
}: OffcanvasProps): JSX.Element {
  const { handleClose, isOpen, randomId } = useContext(AppContext)

  useEffect(() => {
    if (!allowClickAway) return

    const onClickOutside = () => isOpen && handleClose && handleClose()
    document.addEventListener('click', onClickOutside, false)
    return () => document.removeEventListener('click', onClickOutside)
  }, [allowClickAway, isOpen, handleClose])

  useEffect(() => {
    if (!allowEsc) return

    const onEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (isOpen) if (handleClose) handleClose()
      }
    }
    document.addEventListener('keydown', onEscKey, false)
    return () => document.removeEventListener('keydown', onEscKey)
  }, [allowEsc, isOpen, handleClose])

  useEffect(() => {
    if (allowScroll) return

    if (isOpen) {
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen, allowScroll])

  return (
    <>
      <div
        id={`offcanvas_${randomId}`}
        className={`${css.offcanvas} ${css[position]} ${
          isOpen ? css.show : ''
        } ${className}`}
        tabIndex={-1}
        style={styles}
        role="dialog"
        aria-labelledby={css.title}
        aria-modal={true}
        onClick={(event) => event.stopPropagation()}
      >
        <div className={css.header}>
          <h5 className={css.title} id={css.title}>
            {title}
          </h5>
          <div className={css.close} onClick={handleClose}></div>
        </div>
        <div className={css.body}>
          {children ||
            'Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.'}
        </div>
      </div>
      {backdrop && (
        <div className={`${css.backdrop} ${isOpen ? css.show : ''}`}></div>
      )}
    </>
  )
}
