import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Bolas from './Bolas'
 
export default props =>{
    return(
        <View style={Style.Flex4}>
            <Bolas cor="#008B8B" />
            <Bolas cor="#008080" />
            <Bolas cor="#20B2AA" />
            <Bolas cor="#48D1CC" />
            <Bolas cor="#00FFFF" /> 
        </View>
    )
}

const Style = StyleSheet.create({
    Flex4: {
        flexDirection: 'column',
        width: '100%',
        height: 350,
        justifyContent: 'flex-end',
        backgroundColor: "#fff",
        alignItems: 'flex-center',
    }
})