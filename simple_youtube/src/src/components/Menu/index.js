/* eslint-disable import/no-anonymous-default-export */
import "./styles.scss";

import React from 'react'
import { VIEW_HOME, VIEW_README, AppContext } from "../../constance"

export default () => {
  const menuItems = [
    { caption: "Home", view: VIEW_HOME },
    { caption: "readme.md", view: VIEW_README }
  ];

  const { view, setView } = React.useContext(AppContext)

  return <div className="menu">
    {menuItems.map((menu, idx) => {
      return <div key={idx} className={"class-item " + (menu.view === view && "active")} onClick={() => setView(menu.view)}>{menu.caption}</div>
    })}
  </div>
}