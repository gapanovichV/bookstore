import React, {useState} from 'react'
import {Header} from "features/Header";
import {PositionTab, Tab, TTab} from "shared/Tab";
import cn from "classnames";
import cls from './Discover.module.scss'
import {Sidebar} from "features/Discover/Sidebar";
import {Content} from "features/Discover/Content";
interface DiscoverProps {
    className?: string
}
export const Discover  = ({className}: DiscoverProps) => {

  const tabs: TTab[] = [
    { id: "1", label: "All Books" },
    { id: "2", label: "What’s new" },
    { id: "3", label: "Popular" },
  ];
  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);

  const handleTabClick = (e: React.MouseEvent, id: string | number) => {
    e.stopPropagation()
    console.log(id)
    setSelectedTabId(id)
  }
  return (
    <>
      <Header />
      <div className={cn(cls.tabs)}>
        <div className={cn('container')}>
          <Tab position={PositionTab.HORIZONTAL} onClick={(e, id) => handleTabClick(e, id)} selectedId={selectedTabId} tabs={tabs}/>
        </div>
      </div>
      <div className={cn('container')}>
        <div className={cn(cls.content)}>
          <Sidebar />
          <Content />
        </div>
      </div>
    </>
  );
}