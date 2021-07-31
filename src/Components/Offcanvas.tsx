import React, { useCallback, useContext, useEffect } from 'react'
import css from '../styles.module.css'
import { AppContext } from '../Context'
import { OffcanvasProps } from '..'

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
}: OffcanvasProps) {
  const { handleClose, isOpen, randomId } = useContext(AppContext)

  const onClickOutside = useCallback(() => {
    if (!allowClickAway) return

    if (isOpen) {
      if (handleClose) handleClose()
    }
  }, [allowClickAway, isOpen, handleClose])

  const onEscKey = useCallback(
    (event: KeyboardEvent) => {
      if (!allowEsc) return

      if (event.key === 'Escape') {
        if (isOpen) {
          if (handleClose) handleClose()
        }
      }
    },
    [allowEsc, isOpen, handleClose]
  )

  useEffect(() => {
    document.addEventListener('keydown', onEscKey, false)
    return () => document.removeEventListener('keydown', onEscKey)
  }, [onEscKey])

  useEffect(() => {
    document.addEventListener('click', onClickOutside, false)
    return () => document.removeEventListener('click', onClickOutside)
  }, [onClickOutside])

  useEffect(() => {
    if (!allowScroll) {
      if (isOpen) document.body.style.overflow = 'hidden'
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen, allowScroll])

  return (
    <>
      <div
        id={`offcanvas_${randomId}`}
        className={`${css.offcanvas} ${css[position]} ${isOpen ? css.show : ''} ${className}`}
        tabIndex={-1}
        style={styles}
        role='dialog'
        aria-labelledby={css.title}
        aria-modal='true'
        onClick={(event) => event.stopPropagation()}
        aria-hidden='true'
      >
        <div className={css.header}>
          <h5 className={css.title}>{title}</h5>
          <button className={css.close} onClick={handleClose} type='button' tabIndex={0} aria-label='Close' />
        </div>
        <div className={css.body}>
          {children ||
            'Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.'}
        </div>
      </div>
      {backdrop && <div className={`${css.backdrop} ${isOpen ? css.show : ''}`} />}
    </>
  )
}
