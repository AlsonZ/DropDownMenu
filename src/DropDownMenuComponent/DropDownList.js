import React from 'react'
import {ReactComponent as CogIcon} from '../icons/cog.svg'
import {ReactComponent as ChevronIcon} from '../icons/chevron.svg'
import {ReactComponent as ArrowIcon} from '../icons/arrow.svg'

const mainList = [
  {
    type: "action",
    name: "Settings",
    icon: <CogIcon/>,
    iconRight: <ChevronIcon/>,
    link: "#",
    action: 'open-side-menu'
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
]
const settingsList = [
  {
    type: "link",
    name: "cat",
    icon: <CogIcon/>,
    link: "/cat"
  },
  {
    type: "link",
    name: "dog",
    icon: <CogIcon/>,
    link: "/dog"
  },
  {
    type: "link",
    name: "pig",
    icon: <CogIcon/>,
    link: "/pig"
  },
  {
    type: "action",
    name: "return",
    icon: <ArrowIcon/>,
    link: "#",
    action: "close-side-menu"
  },
]

export const DropDownList = {
  main: mainList,
  settings: settingsList,
}