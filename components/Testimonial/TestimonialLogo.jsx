import React from "react"
import { ThemeContext } from "/index.jsx"

export default function TestimonialLogo({children}) {
    const theme = React.useContext(ThemeContext)
    
    const logoFile = theme === 'dark' ? 'logo-ex-white' : 'logo-ex-matcha-light' 
    
    return(
        <div className="testimonial-logo">
            <img src={`/images/${logoFile}.png`} />
        </div>
    )
}