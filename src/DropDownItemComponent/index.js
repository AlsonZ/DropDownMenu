import React, { useState } from 'react';

import './style.css';

const DropDownItem = (props) => {
  const {type, name, icon, link, action} = props.data;
  const [sideMenu, setSideMenu] = useState('side-menu');

  const handleActions = (action) => {
    switch (action) {
      case "open-side-menu":
        props.setActiveMenu('settings');
        break;
      case "close-side-menu":
        props.setActiveMenu('main');
    }
  }

  switch (type) {
    case "action":
      return(
        <a href={link} className="menu-item" onClick={()=>{handleActions(action)}}>
          <span className="icon-button">{icon}</span>
          {name}
          {props.data.iconRight && <span className="icon-button icon-right">{props.data.iconRight}</span>}
        </a>
      )
    case "link":
      return(
      <a href={link} className="menu-item">
      <span className="icon-button">{icon}</span>
      {name}
      <span className="icon-right">{props.data.iconRight}</span>
    </a>
    ) 
    default:
      return(
        <></>
      )  
  }
}

export default DropDownItem;