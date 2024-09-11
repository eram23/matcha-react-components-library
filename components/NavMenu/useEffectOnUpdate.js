import React from "react"

export default function useEffectOnUpdate(effectFunction, deps) {
    const firstRender = React.useRef(true)
    
    React.useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false
            console.log('state has been flipped')
        } else {
            effectFunction()
        }
    }, deps)
}