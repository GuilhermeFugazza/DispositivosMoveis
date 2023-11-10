import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Bolas from './Bolas'
 
export default props =>{
    return(
        <View style={Style.Flex2}>
            <Bolas cor="#008B8B" />
            <Bolas cor="#008080" />
            <Bolas cor="#20B2AA" />
            <Bolas cor="#48D1CC" />
            <Bolas cor="#00FFFF" /> 
        </View>
    )
}

const Style = StyleSheet.create({
    Flex2: {
        flex: 1,
        width: '100%',
        backgroundColor: "#fff",
        alignItems: 'flex-start',
    }
})