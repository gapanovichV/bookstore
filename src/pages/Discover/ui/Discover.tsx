import React, {useState} from 'react'

import {Header} from "features/Header";
import {Sidebar} from "features/Discover/Sidebar";
import {Content} from "features/Discover/Content";

import cn from "classnames";
import cls from './Discover.module.scss'
import {PositionTab, Tab, TTab} from "shared/Tab";
import {useDispatch} from "react-redux";
import {AppDispatch} from "app/providers/StoreProvider";
import {AllBookSlice} from "entities/AllBook";

interface DiscoverProps {
    className?: string
}
export const Discover  = ({className}: DiscoverProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const tabs: TTab[] = [
    { id: 1, label: "All Books" },
    { id: 2, label: "What’s new" },
    { id: 3, label: "Popular" },
  ];
  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);

  const handleTabClick = (e: React.MouseEvent, id: number) => {
    e.stopPropagation()
    setSelectedTabId(id)
    switch (id) {
      case 1:
        dispatch(AllBookSlice.actions.allBooks())
        break
      case 2:
        dispatch(AllBookSlice.actions.newBooks())
        break
      case 3:
        dispatch(AllBookSlice.actions.popularBooks())
        break
      default:
        console.log('def')
    }
  }
  return (
    <>
      <Header />
      <div className={cn(cls.tabs)}>
        <div className={cn('container')}>
          <Tab position={PositionTab.HORIZONTAL} onClick={(e, id: number) => handleTabClick(e, id)} selectedId={selectedTabId} tabs={tabs}/>
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