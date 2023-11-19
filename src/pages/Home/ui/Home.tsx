import React from 'react'
import cn from "classnames";
import cls from './Home.module.scss'
import {Header} from "features/Header";
import {Main} from "features/Main";
import {Card, SizeCard} from "entities/Card";


interface HomeProps {
    className?: string
}
export const Home  = ({className}: HomeProps) => {
  return (
    <>
      <Header />
      <Main />
      <div className={cn(cls.box)}>
        <Card sizeCard={SizeCard.MOBILE} />
      </div>
    </>
  );
}