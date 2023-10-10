import React from "react";
import { Text } from "react-native";
import Style from "../Style";

function Comp() {
    return <Text Style={Style.fontG}>Primeiro Componente</Text>
}

function Comp2() {
    return <Text Style={Style.fontG}>Segundo Componente</Text>
}

function Comp3() {
    return <Text Style={Style.fontG}>Terceiro Componente</Text>
}

export { Comp2, Comp3 }
export default Comp