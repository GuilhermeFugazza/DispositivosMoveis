import React from 'react'
import { Text, StyleSheet, View } from 'react-native'


export default props => {
    const alt = props.alt
    const larg = props.larg

    return (
        <Text style={{
            height: alt,
            width: larg,
            textAlign: 'center',
            backgroundColor: props.cor,
            borderRadius: props.bord,
        }}></Text>
    )
}