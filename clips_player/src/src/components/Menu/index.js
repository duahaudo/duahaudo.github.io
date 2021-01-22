/* eslint-disable import/no-anonymous-default-export */
import "./styles.scss";

import React from 'react'
import { NavLink } from "react-router-dom";
import { VIEW_HOME, VIEW_PRIVACY, VIEW_README } from "../../constance"

export default () => {
  const menuItems = [
    { caption: "Home", view: VIEW_HOME },
    { caption: "Privacy Policy", view: VIEW_PRIVACY },
    { caption: "readme.md", view: VIEW_README }
  ];

  return <div className="menu">
    {menuItems.map((menu, idx) => {
      return <NavLink exact={menu.view === VIEW_HOME} key={idx} activeClassName="active" className={"class-item "} to={menu.view} >{menu.caption}</NavLink>
    })}
  </div>
}