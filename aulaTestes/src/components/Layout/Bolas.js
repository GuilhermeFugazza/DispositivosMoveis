import React from 'react'
import { Text, StyleSheet, View } from 'react-native'


export default props => {
    return (
        <Text style={{
            height: 100,
            width: 100,
            borderRadius:50,
            textAlign: 'center',
            backgroundColor: props.cor || "#fff"
        }}></Text>
    )
}