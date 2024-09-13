import React from 'react'
import classnames from "classnames"
import { ThemeContext } from '/index'

export default function Banner({children, className}) {
    const theme = React.useContext(ThemeContext)

    const banner = 'banner'
    const bannerStatus = className
    const bannerTheme = theme === 'dark' ? 'banner-dark' : null
    const allClasses = classnames(banner, bannerTheme, bannerStatus)

    return (
        <div className={bannerStatus ? allClasses : banner}>
            {children}
        </div>
    )
}