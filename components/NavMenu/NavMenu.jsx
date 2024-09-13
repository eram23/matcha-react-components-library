import React from 'react'
import useToggle from './useToggle'
import NavDropDown from './NavDropDown'
import NavItem from './NavItem'
import { ThemeContext } from '/index.jsx'



export default function NavMenu({children}) {
    const [open, setOpen] = React.useState(false)
    const theme = React.useContext(ThemeContext)

    function toggleOpen(e) {
        setOpen(prevValue => !prevValue)
    }

    const matchaNavTheme = theme === 'dark' ? 'matcha-nav-dark' : 'matcha-nav'
    const dropdownNavTheme = 'dropdown-nav-' + theme

    return (
            <nav className={matchaNavTheme}>
                
                <span className="logo">
                    <img src="./images/logo-ex-2.svg"/>
                    logo
                </span>
                {/* <p>toggle is {open ? 'ON' : 'OFF'}</p> */}
                <a href="#" onClick={toggleOpen}><i className="fa-solid fa-bars"></i></a>
                {
                    open ? 
                    <ul className={dropdownNavTheme}>
                        <a href="#" onClick={toggleOpen}><i className="fa-solid fa-xmark"></i></a>
                        <ul>
                            <li>home</li>
                            <li>about</li>
                        </ul>
                    </ul> 
                     : null
                }
                {children}
            </nav>
    )
}
