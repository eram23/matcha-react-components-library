import React from "react"
import { ThemeContext } from '/index.jsx'
import classNames from "classnames"


export default function Card({ children, className }) {
    const theme = React.useContext(ThemeContext)

    const matchaCard = 'matcha-card'
    const cardTheme = theme === 'dark' ? 'card-dark' : null
    const allClasses =  classNames(matchaCard, cardTheme)
    
    return (
        <div className={allClasses}>
            <img src="./images/easy-deployment.svg" className="easy-deploy-img"/>
            {children}
        </div>
    )
}