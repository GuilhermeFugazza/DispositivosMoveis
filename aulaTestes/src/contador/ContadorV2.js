import React, { useState } from "react";
import { Text, Button } from "react-native";
import Style from "../Style";
import ContadorBotoes from "./ContadorBotoes";
import ContadorDisplay from "./ContadorDisplay";

export default props => {
    const [num, setNum] = useState()
    const inc = () => setNum (num + 1)
    const dec = () => setNum (num - 1)

    return (
        <>
        <Text style={Style.fontG}>
            Contador
        </Text>
        <ContadorDisplay num={num}/>
        <ContadorBotoes inc={inc} dec={dec}/>
        </>
    )
}