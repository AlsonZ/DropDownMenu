import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './NavbarComponent'
import Navitem from './NavitemComponent'
import DropDownMenu from './DropDownMenuComponent'
import {DropDownList} from './DropDownMenuComponent/DropDownList'
import {ReactComponent as CogIcon} from './icons/cog.svg'
import {ReactComponent as CaretIcon} from './icons/caret.svg'
import './App.css';

function App() {
  return (
    <>
    <Router>
      <Navbar>
        <Navitem icon={<CogIcon/>}/>
        <Navitem icon={<CaretIcon/>}>
          <DropDownMenu DropDownList={DropDownList}/>
        </Navitem>
      </Navbar>
      <Route exact path="/cat" component={cat}/>
    </Router>
    </>
  );
}

const cat = () => {
  return(<div>cat page</div>)
}

export default App;
