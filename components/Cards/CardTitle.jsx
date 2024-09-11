import React from "react" 

export default function CardTitle({children}) {
    return (
        <h3 className="matcha-card-title">
            {children}
        </h3>
    )
}