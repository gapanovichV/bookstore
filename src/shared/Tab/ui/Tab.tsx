import React, {useEffect, useRef, useState} from 'react'
import cn from "classnames";
import cls from './Tab.module.scss'

export enum PositionTab {
  HORIZONTAL = 'horizontal',
  VERTICAL = 'vertical'
}

type TTabInTab = {
  subId?: string | number;
  subLabel?: string | number;
}

export type TTab = {
  id: string | number;
  label?: string | number;
  submenu?: TTabInTab[];
}

interface TabProps {
  className?: string
  position: PositionTab
  onClick: (e: React.MouseEvent, id: string| number, insideId?: string | number) => void;
  selectedId: string | number;
  tabs: TTab[]
  submenu?: boolean
  insideSelectId?: string | number
}
export const Tab  = (props: TabProps) => {
  const {
    className,
    position,
    tabs,
    selectedId,
    insideSelectId,
    submenu,
    onClick
  } = props

  return (
    <div className={cn(cls.tabs, className, cls[`tabs_position_${position}`])}>
      {tabs && tabs.map((tab: TTab) => (
        <div className={cn(cls.tab, {[cls.tab_select]: tab.id === selectedId && !submenu})} key={tab.id}
             onClick={(e) => onClick(e, tab.id)}>
          <div className={cn(cls.tab_label, {[cls.tab_select_sub]: submenu},  {[cls.tab_select]: tab.id === selectedId})}>{tab.label}</div>
          <div className={cn(cls.submenu)}>
            {tab.submenu && tab.submenu?.map((tabs: TTabInTab) => (
              <div  className={cn(cls.tab, {[cls.tab_select]: tabs.subId === insideSelectId && tab.id === selectedId})} key={tabs.subId}
                    onClick={(e) => onClick(e, tab.id, tabs.subId)}>
                <div className={cn(cls.tab_label, {[cls.tab_select]: tabs.subId === insideSelectId && tab.id === selectedId})}>{tabs.subLabel}</div>
              </div>
            ))
            }
          </div>
        </div>
      ))}
    </div>
  );
}