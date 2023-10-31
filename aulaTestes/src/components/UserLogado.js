import React from "react";
import { Text } from "react-native";
import Style from "../Style";
import If from "./if";

export default props => {
    const usuario = props.usuario || {}

    return(
        <>
            <If teste={usuario && usuario.nome && usuario.email}>
                <Text style={Style.fontG}>
                    Usuario Logado: 
                </Text>
                <Text style={Style.fontG}>
                    {usuario.nome} - {usuario.email}
                </Text>
            </If>
        </>
    )
}

