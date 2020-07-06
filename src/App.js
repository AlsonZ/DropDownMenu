import React from 'react';
import {HashRouter, Route } from 'react-router-dom'
import Navbar from './NavbarComponent'
import Navitem from './NavitemComponent'
import DropDownMenu from './DropDownMenuComponent'
import {DropDownList} from './DropDownMenuComponent/DropDownList'
import {ReactComponent as UserIcon} from './icons/user.svg'
import {ReactComponent as CaretIcon} from './icons/caret.svg'
import './App.css';

function App() {
  return (
    <>
    <HashRouter basename="/">
      <Navbar>
        <Navitem link="/profile" icon={<UserIcon/>}/>
        <Navitem icon={<CaretIcon/>}>
          <DropDownMenu DropDownList={DropDownList}/>
        </Navitem>
      </Navbar>
      <Route exact path="/profile" component={profile}/>
      <Route exact path="/favourites" component={favourites}/>
      <Route exact path="/notifications" component={notifications}/>
    </HashRouter>
    </>
  );
}

const profile = () => {
  return(<div>profile page</div>)
}
const favourites = () => {
  return(<div>favourites page</div>)
}
const notifications = () => {
  return(<div>notifications page</div>)
}


export default App;
