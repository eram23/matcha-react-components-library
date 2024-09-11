import React from 'react'

 export default function NavDropDown({children}) {

    return (
        <ul className="nav-items">
            {children}
        </ul>
    )
 }