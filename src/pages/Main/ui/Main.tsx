import React from 'react'
import cn from "classnames";
import cls from './Main.module.scss'
import {Header} from "features/Header";


interface MainProps {
    className?: string
}
export const Main  = ({className}: MainProps) => {
  return (
    <>
      <Header />
    </>
  );
}