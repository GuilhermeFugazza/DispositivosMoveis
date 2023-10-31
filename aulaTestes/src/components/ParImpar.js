import React from "react";
import { SafeAreaView, Text } from "react-native";
import Style from "../Style";

export default ({num=5}) => {
    return(
        <SafeAreaView>
            <Text style={Style.fontG}>
                O resultado é: {num%2 == 0
                    ?<Text style={Style.fontG}> Par!</Text>
                    :<Text style={Style.fontG}> Impar!</Text>
                }
            </Text>
        </SafeAreaView>
    )
}