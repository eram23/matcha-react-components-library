import React from "react"


export default function Card({ children, className }) {
    // let allClasses= {}
    
    return (
        <div className="matcha-card">
            <img src="./images/easy-deployment.svg" className="easy-deploy-img"/>
            {children}
        </div>
    )
}