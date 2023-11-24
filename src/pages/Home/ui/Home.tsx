import React, {useState} from 'react'
import cn from "classnames";
import cls from './Home.module.scss'
import {Header} from "features/Header";
import {Main} from "features/Main";
import {PositionTab, Tab, TTab} from "shared/Tab";


interface HomeProps {
    className?: string
}
export const Home  = ({className}: HomeProps) => {
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
      <Main />
      <div className={cn(cls.box)}>
        <Tab position={PositionTab.HORIZONTAL} onClick={handleTabClick} selectedId={selectedTabId} tabs={tabs} />
      </div>
    </>
  );
}