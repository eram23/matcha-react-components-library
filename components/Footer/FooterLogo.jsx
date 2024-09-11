import React from 'react'
import classnames from "classnames"

export default function FooterLogo({children, className}) {
    const allClasses = classnames(className)

    return (
        <>
            {children}
        </>
    )
}