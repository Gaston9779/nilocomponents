
import { StyleSheet, Button, Pressable, View, Text, Image, Dimensions } from 'react-native'

const H = Dimensions.get( 'window' ).height
const W = Dimensions.get( 'window' ).width


const styles = StyleSheet.create( {

    container: {
        width: W,
        height: H / 5,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center', 
        overflow: 'hidden'
    },
    buttonNav: {
        width: Dimensions.get( 'window' ).width / 5,
        height: Dimensions.get( 'window' ).height / 20,
        backgroundColor: 'tomato',
        borderRadius: 10,
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    countScore: {
        borderWidth: 1,
        fontSize: 50,
        fontWeight: '800'
    }
} )
export default styles;