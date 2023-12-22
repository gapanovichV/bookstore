import React, {useState} from 'react'
import cn from "classnames";
import cls from './AdminPanel.module.scss'
import {Button, SizeButton, VariantButton} from "shared/Button";
import Test1 from 'shared/assets/img/test1.png'

interface AdminPanelProps {
    className?: string
}
export const AdminPanel  = ({className}: AdminPanelProps) => {
  const [searchName, setSearchName] = useState('')


  const handleClickSearch = () => {
    console.log(searchName)
    setSearchName('')
  }

  return (
    <div className={cn(cls.admin_panel, className)}>
        <div className={cn('container')}>
          <div className={cn(cls.admin_search)}>
            <input className={cn(cls.admin_input)} type="text" placeholder='Name' value={searchName} onChange={e => setSearchName(e.target.value)}/>
            <Button variantBtn={VariantButton.FILL} sizeBtn={SizeButton.LARGE} onClick={handleClickSearch}>Search</Button>
          </div>
          <div className={cn(cls.card_wrapper)}>
            <div className={cn(cls.admin_card)}>
              <div className={cn(cls.image)}>
                <img src={Test1} alt="Image"/>
              </div>
              <p>Name</p>
              <Button variantBtn={VariantButton.LINE} sizeBtn={SizeButton.MEDIUM}>Edit</Button>
            </div>
          </div>
        </div>
    </div>
  );
}