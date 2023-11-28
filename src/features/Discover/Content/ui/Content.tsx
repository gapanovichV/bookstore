import React from 'react'
import cn from "classnames";
import cls from './Content.module.scss'

interface ContentProps {
    className?: string
}
export const Content  = ({className}: ContentProps) => {
  return (
    <div className={cn(cls.content, className)}>
        Content
    </div>
  );
}