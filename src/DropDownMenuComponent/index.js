import React from 'react';
import DropDownItem from '../DropDownItemComponent'
import './style.css';

const DropDownMenu = (props) => {

  const loadDropDownItems = () => {
    return(
      props.DropDownItems.map((data) => 
        <DropDownItem data={data}/>
      )
    )
  }

  return(
    <div className="dropdownmenu">
      {loadDropDownItems()}
    </div>
  )
}

export default DropDownMenu;