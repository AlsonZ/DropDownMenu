import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
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
    <Router>
      <Navbar>
        <Navitem icon={<UserIcon/>}/>
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
const favourites = () => {
  return(<div>favourites page</div>)
}
const notifications = () => {
  return(<div>notifications page</div>)
}


export default App;
