import React from 'react'
import {ReactComponent as CogIcon} from '../icons/cog.svg'
export const DropDownList = [
  {
    type: "action",
    name: "Settings",
    icon: <CogIcon/>,
    iconRight: <CogIcon/>,
    link: "#",
    action: () => {}
  },
  {
    type: "link",
    name: "Profile",
    icon: <CogIcon/>,
    link: "/profile"
  },
  {
    type: "action",
    name: "Logout",
    icon: <CogIcon/>,
    link: "#",
    action: () => {}
  },
  {
    type: "side-menu",
    name: "cat",
    icon: <CogIcon/>,
    link: "/cat"
  },
  {
    type: "side-menu",
    name: "dog",
    icon: <CogIcon/>,
    link: "/dog"
  },
  {
    type: "side-menu-action",
    name: "return",
    icon: <CogIcon/>,
    link: "#",
    action: () => {}
  },
]