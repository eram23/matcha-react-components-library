import React from 'react'
import classnames from "classnames"

export default function FooterContent({children, className}) {
    const allClasses = classnames(className)

    return (
        <div className={allClasses}>
            {children}
        </div>
    )
}