import React, { useState, useRef, useEffect } from 'react';
import DropDownItem from '../DropDownItemComponent'
import { CSSTransition } from 'react-transition-group';
import './style.css';

const DropDownMenu = (props) => {

  const dropdownRef = useRef(null);
  const menuRef = useRef(null);
  const sideMenuRef = useRef(null);
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  },[])

  const calcHeight = () => {
    let height;
    if(activeMenu === 'main') {
      height = menuRef.current?.offsetHeight;
    } else if(activeMenu === 'settings') {
      height = sideMenuRef.current?.offsetHeight;
    }
    setMenuHeight(height);
  }

  const loadDropDownItems = (list) => {
    return(
      list.map((data) => 
        <DropDownItem key={data.name} data={data} setActiveMenu={setActiveMenu}/>
      )
    )
  }

  const loadMenus = () => {
    return(
      <div className="dropdownmenu" style={{height: menuHeight}} ref={dropdownRef}>
        <CSSTransition
          nodeRef={menuRef}
          in={activeMenu === "main"}
          timeout={500}
          classNames="main-menu"
          unmountOnExit
          onEnter={calcHeight}
        >
          <div className="menu" ref={menuRef}>
            {loadDropDownItems(props.DropDownList.main)}  
          </div>
        </CSSTransition>

        <CSSTransition
          nodeRef={sideMenuRef}
          in={activeMenu === "settings"}
          timeout={500}
          classNames="side-menu"
          unmountOnExit
          onEnter={calcHeight}
        >
          <div className="menu" ref={sideMenuRef}>
            {loadDropDownItems(props.DropDownList.settings)}  
          </div>
        </CSSTransition>
      </div>
    )
  }

  return(
    loadMenus()
  )
}

export default DropDownMenu;