import React from "react";
import { View, Text , Dimensions, StyleSheet} from 'react-native'
import NiloButton from './NiloButton'

const H = Dimensions.get( 'window' ).height
const W = Dimensions.get( 'window' ).width

const ScoreBoard = (props) => {
    return (
        <View style={styles.container} >
            <Text style={styles.countScore}>{props.scoreUser}</Text>
            <View>
                <NiloButton style={styles.buttonNav} buttonText={'ScoreBoard'}/>
                <NiloButton style={styles.buttonNav} buttonText={'Try Again'}/>
            </View>
            <Text style={styles.countScore}>{props.scoreCPU}</Text>
        </View>
    )
}

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
        fontWeight: 800
    }
} )
export default ScoreBoard;