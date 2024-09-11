import React from 'react'
import classnames from "classnames"

export default function Footer({children, className}) {
    const allClasses = classnames(className)

    return (
        <footer className={allClasses}>
            {children}
        </footer>
    )
}