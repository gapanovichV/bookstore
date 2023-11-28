import React, {useRef, useState} from 'react'
import cn from "classnames";
import cls from './Sidebar.module.scss'
import {PositionTab, Tab, TTab} from "shared/Tab";

interface SidebarProps {
    className?: string
}
export const Sidebar  = ({className}: SidebarProps) => {
  const SidebarTabs: TTab[] = [
    { id: 1, label: "Fiction & Literature", submenu:
        [{subId: 1, subLabel: "Thriller"},
          {subId: 2, subLabel: "Romance"},
          {subId: 3, subLabel: "Young Adult"},
          {subId: 4, subLabel: "Serial"}
        ]},
    { id: 2, label: "Non Fiction"},
    { id: 3, label: "Comic" },
    { id: 4, label: "Children Book" },
  ];

  const [selectSubTabId, setSelectSubTabId] = useState([SidebarTabs[0].id, SidebarTabs[0].submenu[0].subId])

  const handleSubTabClick = ( e: React.MouseEvent,  id: string | number, insideId: string | number) => {
    e.stopPropagation()
    setSelectSubTabId([id, insideId])
  }

  return (
    <div className={cn(cls.sidebar, className)}>
        <ul className={cn(cls.sidebar_list)}>
          <Tab
            submenu={true}
            position={PositionTab.VERTICAL}
            onClick={(
              e,
              id,
              insideId) => handleSubTabClick(e, id, insideId)}
            selectedId={selectSubTabId[0]}
            insideSelectId={selectSubTabId[1]}
            tabs={SidebarTabs} />
        </ul>
    </div>
  );
}