import React from 'react'
import cn from "classnames";
import cls from './AdminModal.module.scss'
import {BookSchema} from "entities/AdminBook";

interface AdminModalProps {
  className?: string
  book: BookSchema
}
export const AdminModal = ({className, book}: AdminModalProps) => {
  return (
    <div className={cn(cls.adminModal, className)}>
      {book.id}
    </div>
  );
}