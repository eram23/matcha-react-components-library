import React from 'react'
import classnames from "classnames"
import { ThemeContext } from '/index'

export default function Footer({children, className}) {
    const theme = React.useContext(ThemeContext)
    const footerTheme = theme === 'dark' ? 'footer-dark' : null

    return (
        <footer className={footerTheme}>
            {children}
        </footer>
    )
}