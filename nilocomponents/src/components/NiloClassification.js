import React from 'react'
import { View, Button } from 'react-native'
import LocalStorage from './LocalStorage.mjs'

export default function NiloClassification() {
    const localStorage = new LocalStorage()
    const classificationList = localStorage.getData()
    return (
        <>
            <Button title="Aggiungi a local" onPress={localStorage.addData("users", {user: "test", password: "passw", points: 123})}/>
            <View>
                {classificationList}
            </View>
        </>
    )
}
