import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Bolas from '../Bolas'

export default props => {
    return (
            <View style={Style.tree}>             
                <Bolas alt='50%' larg='40%' cor="#60F956"  />
            </View>
    )
}

const Style = StyleSheet.create({
    tree: {
        alignItems: 'center',
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        backgroundColor: '#00bfff'
    },
    sol: {
        borderRadius: 25,
        backgroundColor: '#fff'
    }
})