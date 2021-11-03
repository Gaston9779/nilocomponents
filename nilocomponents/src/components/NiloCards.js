import React from 'react'
import { Button,Dimensions, View, Text, Image } from 'react-native'

const H = Dimensions.get( 'window' ).height
const W = Dimensions.get( 'window' ).width
const NiloCards = (props) => {

    return(
        <View style={{width:W / 10, height: H / 5, borderWidth:1}}>
            <Image source={props.image} />
        </View>
    )
}
export default NiloCards;