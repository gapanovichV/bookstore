import React from 'react'
import cn from "classnames";
import cls from './Content.module.scss'
import {Card, SizeCard} from "entities/Card";

interface ContentProps {
    className?: string
}
export const Content  = ({className}: ContentProps) => {
  return (
    <div className={cn(cls.content, className)}>
      <div className={cn(cls.header)}>
        Showing 1 - 9 items out of a total of ? million books
        <div className={cn(cls.dropdown)}>Sort by:  DROPDOWN </div>
      </div>
      <div className={cn(cls.book_list)}>
        <Card sizeCard={SizeCard.LARGE}/>
        <Card sizeCard={SizeCard.LARGE}/>
        <Card sizeCard={SizeCard.LARGE}/>
        <Card sizeCard={SizeCard.LARGE}/>
        <Card sizeCard={SizeCard.LARGE}/>
        <Card sizeCard={SizeCard.LARGE}/>
        <Card sizeCard={SizeCard.LARGE}/>
        <Card sizeCard={SizeCard.LARGE}/>
        <Card sizeCard={SizeCard.LARGE}/>
      </div>
      <div className={cn(cls.pagination)}>
        PAGINATION
      </div>
    </div>
  );
}