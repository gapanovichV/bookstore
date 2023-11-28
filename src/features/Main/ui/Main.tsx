import React from 'react'
import cn from "classnames";
import cls from './Main.module.scss'
import {Button, SizeButton, VariantButton} from "shared/Button";

import RightArrow from 'shared/assets/icon/Right-Arrow.svg'
import {RoutePath} from "app/App";
import {useNavigate} from "react-router-dom";

interface MainProps {
    className?: string
}

export const Main  = ({className}: MainProps) => {
  const navigate = useNavigate()
  return (
    <section className={cn(cls.main)}>
      <div className={cn('container')}>
        <div className={cn(cls.main__wrapper)}>
          <div className={cn(cls.main__about)}>
            <h1 className={cn(cls.main__about__hero)}>
              The easiest way to find the best book!
            </h1>
            <p className={cn(cls.main__about__subtitle)}>
              With us, you can shop online & help save your high street at the same time
            </p>
            <Button
              onClick={() => navigate(RoutePath.DISCOVER)}
              className={cn(cls.main__about__btn)}
              variantBtn={VariantButton.LINE}
              sizeBtn={SizeButton.MEDIUM}
              rightIcon={true}>
              Explore Book
              <RightArrow />
            </Button>
          </div>
          <div className={cn(cls.main__slider)}>
            <img src={require('shared/assets/img/Pic.jpg').default} alt="Book"/>
          </div>
        </div>
      </div>
    </section>
  );
}