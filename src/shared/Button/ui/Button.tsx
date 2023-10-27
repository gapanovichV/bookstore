import React, {ReactNode} from 'react'
import cn from "classnames";
import cls from './Button.module.scss'

export enum VariantButton {
  FILL = 'fill',
  LINE = 'line',
  GHOST = 'ghost',
  DISABLE = 'disable',

}
export enum SizeButton {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
  ICON = 'icon',
}

interface ButtonProps {
  className?: string
  children: ReactNode
  variantBtn: VariantButton
  sizeBtn: SizeButton,
  leftIcon?: boolean,
  rightIcon?: boolean
}
export const Button  = (props: ButtonProps) => {
  const {
    className,
    children,
    variantBtn,
    sizeBtn,
    rightIcon,
    leftIcon} = props

  return (
    <button className={cn(cls.button,
      className,
      cls[`variant_${variantBtn}`],
      cls[`size_${sizeBtn}`],
      {[cls.icon_left]: leftIcon},
      {[cls.icon_right]: rightIcon})}>
      {children}
    </button>
  );
}