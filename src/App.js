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
      <Route exact path="/profile" component={profile}/>
      <Route exact path="/cat" component={cat}/>
      <Route exact path="/dog" component={dog}/>
      <Route exact path="/pig" component={pig}/>
    </Router>
    </>
  );
}

const profile = () => {
  return(<div>profile page</div>)
}
const cat = () => {
  return(<div>cat page</div>)
}
const dog = () => {
  return(<div>dog page</div>)
}
const pig = () => {
  return(<div>pig page</div>)
}

export default App;
