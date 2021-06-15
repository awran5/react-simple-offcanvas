import React, { useContext } from 'react';
import { AppContext } from '../Context';

declare type Component = 'button' | 'div';

interface TriggerProps {
  component?: Component;
  className?: string;
  styles?: React.CSSProperties;
  children?: React.ReactNode;
}

export function Trigger({
  component = 'button',
  className = 'offcanvas-trigger',
  styles = {},
  children,
}: TriggerProps): JSX.Element {
  const { handleOpen, randomId } = useContext(AppContext);

  return component === 'button' ? (
    <button
      type="button"
      className={className}
      onClick={handleOpen}
      style={styles}
      aria-controls={`offcanvas_${randomId}`}
    >
      {children || 'Offcanvas Trigger'}
    </button>
  ) : (
    <div
      className={className}
      onClick={handleOpen}
      style={styles}
      role="button"
      aria-controls={randomId}
    >
      {children || 'Offcanvas Trigger'}
    </div>
  );
}
