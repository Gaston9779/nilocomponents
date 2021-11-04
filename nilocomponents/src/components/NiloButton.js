import React from 'react'
import { Pressable, Text } from 'react-native'


const NiloButton = (props) => {

    const handleClick = (e) => {
        props.callback(e)
    }

    return (
        <Pressable
            style={props.style}
            onPress={handleClick}
        >
            <Text style={props.styleText}>{props.buttonText}</Text>
        </Pressable>
    )
}
export default NiloButton;