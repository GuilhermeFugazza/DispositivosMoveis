import React from 'react'
import { SafeAreaView, Button, StyleSheet } from 'react-native'
import Style from '../Style'

export default props => {
    return(
        <SafeAreaView style={Style.Botoes}>
            <Button color='green' title="                    +                    " onPress={props.inc}/>
            <Button color='#fff' title="" style={Style.btnTeste}/>
            <Button color='red'title="-" onPress={props.dec}/>
        </SafeAreaView>
    )

}

const style = StyleSheet.create({
    Botoes:{
        flexDirection: "row",
        
    }
})