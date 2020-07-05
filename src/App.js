import React from 'react';
import Navbar from './NavbarComponent'
import Navitem from './NavitemComponent'
import DropDownMenu from './DropDownMenuComponent'
import {ReactComponent as ArrowIcon} from './icons/arrow.svg'
import {ReactComponent as CogIcon} from './icons/cog.svg'
import {ReactComponent as CaretIcon} from './icons/caret.svg'
import './App.css';

function App() {

  const menuItems = [
    {
      name: "Settings",
      icon: <CogIcon/>,
      link: "/settings"
    },
    {
      name: "Settings2",
      icon: <CogIcon/>,
      link: "/settings2"
    },
    {
      name: "Settings3",
      icon: <CogIcon/>,
      link: "/settings3"
    }
  ]

  return (
    <div>
      <Navbar>
        <Navitem icon={<CogIcon/>}/>
        <Navitem icon={<CaretIcon/>}>
          <DropDownMenu DropDownItems={menuItems}/>
        </Navitem>
      </Navbar>
    </div>
  );
}

export default App;
