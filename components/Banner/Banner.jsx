import React from 'react'
import classnames from "classnames"

export default function Banner({children, className}) {
    const allClasses = classnames(className)

    return (
        <div className={allClasses}>
            {children}
        </div>
    )
}