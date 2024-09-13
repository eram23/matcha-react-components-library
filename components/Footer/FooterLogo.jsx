import React from 'react'
import classnames from "classnames"
import footerLogo from '/images/logo-ex-2.svg'

export default function FooterLogo({children, className}) {
    const allClasses = classnames(className)

    return (
        <span className="footer-logo">
            <img src={footerLogo}/>
            logo
        </span>
    )
}