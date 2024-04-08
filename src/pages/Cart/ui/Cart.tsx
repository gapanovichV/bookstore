import React from 'react'
import cn from "classnames";
import cls from './Cart.module.scss'


interface CartProps {
  className?: string
}
export const Cart  = ({className}: CartProps) => {
  return (
    <div className={cn(cls.cart)}>CART</div>
  )
}