import React from 'react'
import {Link, useNavigate} from "react-router-dom";
import cn from "classnames";

import {RoutePath} from "app/App";
import cls from './Header.module.scss'

import Logo from 'shared/assets/icon/Logo.svg'
import Search from 'shared/assets/icon/Search.svg'
import {Button, SizeButton, VariantButton} from "shared/Button";

interface HeaderProps {
    className?: string
}

export const Header  = ({className}: HeaderProps) => {
  const navigate = useNavigate()
  return (
    <header className={cn(cls.header)}>
      <div className={cn('container')}>
        <nav className={cn(cls.header__wrapper)}>
          <Link to={RoutePath.MAIN}><Logo /></Link>
          <div className={cn(cls.input__group)}>
            <input type="text" placeholder='What book are you looking for?'/>
            <button type="button"><Search /></button>
          </div>
          <Button onClick={() => console.log(555)} variantBtn={VariantButton.GHOST} sizeBtn={SizeButton.MEDIUM}>Discover</Button>
          <Button onClick={() => navigate(RoutePath.LOGIN)} variantBtn={VariantButton.FILL} sizeBtn={SizeButton.MEDIUM}>Login</Button>
        </nav>
      </div>
    </header>
  )
}