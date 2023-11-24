import React, {useState} from 'react'
import {Header} from "features/Header";
import {PositionTab, Tab, TTab} from "shared/Tab";
import cn from "classnames";
import cls from './Discover.module.scss'

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

  const handleTabClick = (id: string | number) => {
    console.log(id)
    setSelectedTabId(id)
  }

  return (
    <>
      <Header />
      <div className={cn(cls.tabs)}>
        <div className={cn('container')}>
          <Tab position={PositionTab.HORIZONTAL} onClick={handleTabClick} selectedId={selectedTabId} tabs={tabs}/>
        </div>
      </div>

    </>
  );
}