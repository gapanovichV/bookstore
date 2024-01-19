import React, {ReactNode} from 'react'
import cn from "classnames";
import cls from './Modal.module.scss'

interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
}

enum Key {
  ESCAPE = 'Escape'
}
export const Modal  = (props: ModalProps) => {
  const {className,children,isOpen,onClose} = props


  const closeHandler = () => {
    if (onClose) {
      onClose()
    }
  }
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === Key.ESCAPE) {
      onClose()
    }
  }

  const onClickContext = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
  };

  return (
    <div onKeyDown={(e) => handleKeyDown(e)} className={cn(cls.modal, mods)}>
        <div onClick={closeHandler} className={cls.overlay}>
          <div className={cn(cls.content, [className])} onClick={onClickContext}>
            {children}
          </div>
        </div>
    </div>
  );
}