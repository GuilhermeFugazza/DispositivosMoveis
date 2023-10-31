import React from "react";
import { Text } from "react-native";

import Style from "../../Style";

export default props => {
    return(
        <>
        
            <Text style={Style.fontG}>{props.a}</Text>
            <Text style={Style.fontG}>{props.b}</Text>

        </>
    )
  

}