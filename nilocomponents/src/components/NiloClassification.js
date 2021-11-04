import React from 'react'
import { View, Text } from 'react-native'
import LocalStorage from './LocalStorage'
import _ from 'lodash'

export default function NiloClassification() {
    const localStorage = new LocalStorage()
    const classificationList = localStorage.getData("users")
    const orederedClassification = _.orderBy(classificationList, ['points', 'name'], ['desc', 'desc'])
    return (
        <>
            <View>
                {orederedClassification.map(user => {
                    return(
                        <Text>{user.user} {user.points}</Text>
                    )
                })}
            </View>
        </>
    )
}
