import React, { useState } from 'react'
import { SafeAreaView, Text, TextInput } from 'react-native'
import Style from '../Style.js'

export default props => {
    const [ nome, setNome ] = useState("Testes")

    return (
        <SafeAreaView>
            <Text style={Style.fontG}> {nome} </Text>
            <TextInput
                placeholder="Nome..."
                value={nome}
                onChangeText={nome=>setNome(nome)}
            />
        </SafeAreaView>
    )
}