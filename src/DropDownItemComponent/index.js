import React, { useState } from 'react';

import './style.css';

const DropDownItem = ({data}) => {
  const {type, name, icon, link, action} = data;
  const [open, setOpen] = useState(false);
  switch (type) {
    case "action":
      return(
        <a href={link} className="menu-item">
          <span className="icon-button">{icon}</span>
          {name}
          <span className="icon-right">{data.iconRight}</span>
        </a>
      )
    case "link":
      return(
      <a href={link} className="menu-item">
      <span className="icon-button">{icon}</span>
      {name}
      <span className="icon-right">{data.iconRight}</span>
    </a>
    )
    case "side-menu":
      return(
        <a href={link} className="menu-item">
          <span className="icon-button">{icon}</span>
          {name}
          <span className="icon-right">{data.iconRight}</span>
        </a>
      )
    case "side-menu-action":
      return(
        <a href={link} className="menu-item">
          <span className="icon-button">{icon}</span>
          {name}
          <span className="icon-right">{data.iconRight}</span>
        </a>
      )  
    default:
      return(
        <></>
      )  
  }
}

export default DropDownItem;