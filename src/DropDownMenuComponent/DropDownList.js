import React from 'react'
import {ReactComponent as CogIcon} from '../icons/cog.svg'
import {ReactComponent as ChevronIcon} from '../icons/chevron.svg'
import {ReactComponent as ArrowIcon} from '../icons/arrow.svg'
import {ReactComponent as UserIcon} from '../icons/user.svg'
import {ReactComponent as ExitIcon} from '../icons/exit.svg'
import {ReactComponent as StarIcon} from '../icons/star.svg'
import {ReactComponent as BellIcon} from '../icons/bell.svg'
import {ReactComponent as MoonIcon} from '../icons/moon.svg'
import {ReactComponent as SunIcon} from '../icons/sun.svg'

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
    icon: <UserIcon/>,
    link: "/profile"
  },
  {
    type: "action",
    name: "Logout",
    icon: <ExitIcon/>,
    link: "#",
    action: () => {}
  },
]
const settingsList = [
  {
    type: "action",
    name: "Back",
    icon: <ArrowIcon/>,
    link: "",
    action: "close-side-menu"
  },
  {
    type: "link",
    name: "Favourites",
    icon: <StarIcon/>,
    link: "/favourites"
  },
  {
    type: "link",
    name: "Notifications",
    icon: <BellIcon/>,
    link: "/notifications"
  },
  {
    type: "action",
    name: "Night Mode",
    icon: <MoonIcon/>,
    link: "",
    action: "toggle-nightmode"
  },
  {
    type: "action",
    name: "Light Mode",
    icon: <SunIcon/>,
    link: "",
    action: "toggle-lightmode"
  },
]

export const DropDownList = {
  main: mainList,
  settings: settingsList,
}