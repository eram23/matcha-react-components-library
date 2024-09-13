import React from "react"
import classNames from "classnames"
import { ThemeContext } from "/index.jsx"

export default function Testimonial({children}) {
    const theme = React.useContext(ThemeContext)
    
    const testimonial = 'testimonial'
    const testimonialTheme = theme === 'dark' ? 'testimonial-dark' : null
    const allClasses = classNames(testimonial, testimonialTheme)

    return(
        <div className={allClasses}>
            {children}
        </div>
    )
}