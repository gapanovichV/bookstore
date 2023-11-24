import React from 'react'
import cn from "classnames";
import cls from './Tab.module.scss'

export enum PositionTab {
  HORIZONTAL = 'horizontal',
  VERTICAL = 'vertical'
}

export type TTab = {
  id: string | number;
  label?: string | number;
};

interface TabProps {
  className?: string
  position: PositionTab
  onClick: (id: string | number) => void;
  selectedId: string | number;
  tabs: TTab[]
}
export const Tab  = (props: TabProps) => {
 const {
   className,
   position,
   tabs,
   selectedId,
   onClick} = props
  return (
    <div className={cn(cls.tabs, className, cls[`tabs_position_${position}`])}>
      {tabs && tabs.map((tab: TTab) => (
        <div className={cn(cls.tab, {[cls.tab_select]: tab.id === selectedId})} key={tab.id} onClick={() => onClick(tab.id)}>
          <div className={cn(cls.tab_label, {[cls.tab_select]: tab.id === selectedId})}>{tab.label}</div>
        </div>
      ))}
    </div>
  );
}
