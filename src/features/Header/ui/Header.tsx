import React from 'react'
import {Link, useNavigate} from "react-router-dom";

import cn from "classnames";
import {RoutePath} from "app/App";

import cls from './Header.module.scss'
import Logo from 'shared/assets/icon/Logo.svg'
import {Button, SizeButton, VariantButton} from "shared/Button";
import {SearchInput} from "entities/SearchInput";

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
          <SearchInput/>
          <Button onClick={() => navigate(RoutePath.DISCOVER)} variantBtn={VariantButton.GHOST} sizeBtn={SizeButton.MEDIUM}>Discover</Button>
          <Button onClick={() => navigate(RoutePath.LOGIN)} variantBtn={VariantButton.FILL} sizeBtn={SizeButton.MEDIUM}>Login</Button>
        </nav>
      </div>
    </header>
  )
}