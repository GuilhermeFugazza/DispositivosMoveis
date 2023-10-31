import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";
import Style from "../Style";

export default props => {
    return(
        <SafeAreaView style={style.Display}>
            <Text style={[Style.fontG, style.DisplayText]}>
                {props.num}
            </Text>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    Display:{
        backgroundColor: '#fff',
        padding: 20,
        width: 300,
    },
    DisplayText:{
        color:'#FFF'
    }

})