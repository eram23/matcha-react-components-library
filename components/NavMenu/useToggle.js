import React from 'react'
import useEffectOnUpdate from './useEffectOnUpdate'

export default function useToggle({
    initialValue = false,
    ontoggle =  () => {}
}) {
    const [isON, setIsOn] = React.useState(initialValue)

    const toggleValue = () => {
        setIsOn(value => !value)
    }

    useEffectOnUpdate(ontoggle, [isON])

    return [isON, toggleValue]
}