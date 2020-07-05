import React, { useState } from 'react';
import './style.css';

const Navitem = (props) => {

  const [open, setOpen] = useState(false);

  return(
    <li className="navitem">
      <a href="#" className="icon-button" onClick={() => {setOpen(!open)}}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  )
}

export default Navitem;