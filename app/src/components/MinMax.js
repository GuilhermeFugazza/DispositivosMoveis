import React from "react";
import { Text } from "react-native";
import Style from "../Style";


export default ({ min, max }) => {
    
    const conta = max - min + 1;
    const aleat = parseInt(Math.random() * conta) + min;
    const aleat2 = parseInt(Math.random() * conta) + min;
    const aleat3 = parseInt(Math.random() * conta) + min;
    const aleat4 = parseInt(Math.random() * conta) + min;


    return (
        <Text style={Style.fontG}>
            Os número sorteado foram... {aleat} {aleat2} {aleat3} {aleat4} 
        </Text>
    )
}