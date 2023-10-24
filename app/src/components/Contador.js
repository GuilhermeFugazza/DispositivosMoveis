import React, { useState } from 'react'
import { Text, Button, View } from 'react-native'
import Style from '../Style'

export default ({ inicial = 0, passo = 1 }) => {

    const [numero, setNumero] = useState(inicial)
    const inc = () => setNumero(numero + passo)
    const dec = () => setNumero(numero - passo)


    return (
        <>
            <Text style={Style.fontG}> {numero} </Text>
            <View>
                <Button color='green' title='          +          ' onPress={inc}> </Button>
                <Button color='red' title='            -            ' onPress={dec}> </Button>
            </View>
        </>
    )
}