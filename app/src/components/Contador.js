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
                <Button style={Style.btnCont} title='+' onPress={inc}> </Button>
                <Button style={Style.btnCont} title='-' onPress={dec}> </Button>
            </View>
        </>
    )
}