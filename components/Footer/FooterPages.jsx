import React from 'react'
import classnames from "classnames"

export default function FooterPages({children, className}) {
    const allClasses = classnames(className)

    return (
        <div>
            <p>Relevant Pages</p>
            <ul className={allClasses}>
                {children}
            </ul>
        </div>
    )
}