import React from "react"
import { ThemeContext } from "/index.jsx"
import testimonialLogo from '/images/logo-ex-matcha-light.png'

export default function TestimonialLogo({children}) {
    const theme = React.useContext(ThemeContext)
    
    
    
    return(
        <div className="testimonial-logo">
            <img src={testimonialLogo} />
        </div>
    )
}