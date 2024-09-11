import React from 'react'
import useToggle from './useToggle'
import NavDropDown from './NavDropDown'
import NavItem from './NavItem'



export default function NavMenu({children}) {
    const [open, setOpen] = React.useState(false)

    function toggleOpen(e) {
        setOpen(prevValue => !prevValue)

        // if(e.target.className === "fa-solid fa-bars") {
        //     setOpen(prevValue => !prevValue)
        // } else if (e.target.className === "dropdown-nav" ) {
        //     setOpen(prevValue => !prevValue)

        // }
        console.log(e.target)
    }

    return (
            <nav className="matcha-nav">
                
                <span className="logo">
                    <img src="./images/logo-ex-2.svg"/>
                    logo
                </span>
                {/* <p>toggle is {open ? 'ON' : 'OFF'}</p> */}
                <a href="#" onClick={toggleOpen}><i className="fa-solid fa-bars"></i></a>
                {
                    open ? 
                    <ul className="dropdown-nav">
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
