import React from 'react'
import { StyleSheet, Dimensions, Pressable, Image,View } from 'react-native'

const H = Dimensions.get( 'window' ).height
const W = Dimensions.get( 'window' ).width
const NiloCards = ( props ) =>
{

    const handleClick = ( e ) =>
    {
        props.callback( e )
    }
    return (
        
        <Pressable style={ styles.cardNilo } onPress={ handleClick }>
            <Image style={ props.styleImage } source={ props.image } />
        </Pressable>
        
    )
}

const styles = StyleSheet.create( {
  
    cardNilo: {
        width: W/10,
        height: H/5,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding: H/15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
} )
export default NiloCards;