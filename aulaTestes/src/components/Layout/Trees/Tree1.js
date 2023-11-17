import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Bolas from '../Bolas'

export default props => {
    return (
            <View style={Style.tree}>             
                <Bolas alt='2.5%' larg='5%' cor="#60F956" />
                <Bolas alt='2.5%' larg='7.5%' cor="#60F956" />
                <Bolas alt='2.5%' larg='10%' cor="#60F956" />
                <Bolas alt='2.5%' larg='12.5%' cor="#60F956" />
                <Bolas alt='2.5%' larg='15%' cor="#60F956" />
                <Bolas alt='2.5%' larg='17.5%' cor="#60F956" />
                <Bolas alt='2.5%' larg='20%' cor="#60F956" />
                <Bolas alt='2.5%' larg='22.5%' cor="#60F956" />
                <Bolas alt='2.5%' larg='25%' cor="#60F956" />
                <Bolas alt='2.5%' larg='27.5%' cor="#60F956" />
                <Bolas alt='2.5%' larg='30%' cor="#60F956" />
                <Bolas alt='2.5%' larg='32.5%' cor="#60F956" />
                <Bolas alt='2.5%' larg='35%' cor="#60F956" />
                <Bolas alt='2.5%' larg='37.5%' cor="#60F956" />
                <Bolas alt='2.5%' larg='40%' cor="#60F956" />
                <Bolas alt='2.5%' larg='42.5%' cor="#60F956" />
                <Bolas alt='2.5%' larg='45%' cor="#60F956" />
                <Bolas alt='2.5%' larg='47.5%' cor="#60F956" />
                <Bolas alt='2.5%' larg='50%' cor="#60F956" />
                <Bolas alt='2.5%' larg='52.5%' cor="#60F956" />
                <Bolas alt='2.5%' larg='55%' cor="#60F956" />
                <Bolas alt='2.5%' larg='57.5%' cor="#60F956" />
                <Bolas alt='2.5%' larg='60%' cor="#60F956" />
                <Bolas alt='2.5%' larg='62.5%' cor="#60F956" />
                <Bolas alt='2.5%' larg='65%' cor="#60F956" />
                <Bolas alt='3%' larg='13.5%' cor="#8B4513" />
                <Bolas alt='3%' larg='14%' cor="#8B4513" />
                <Bolas alt='3%' larg='14.5%' cor="#8B4513" />
                <Bolas alt='3%' larg='15%' cor="#8B4513" />
            </View>
    )
}

const Style = StyleSheet.create({
    container: {
        width: '20%',
        height: '20%',
        backgroundColor: '#663300',
    },

    Flex3: {
        flexDirection: 'column',
        width: '100%',
        height: '85%',
        justifyContent: 'flex-end',
        backgroundColor: "#00bfff",
        alignItems: 'left',
    },
    solo: {
        height: '4%',
        width: '100%',
        backgroundColor: "#669900"
    },
    tree: {
        alignItems: 'center',
        width: '20%',
        height: '20%',
        justifyContent: 'flex-end',
        backgroundColor: '#00bfff'
    },
    sol: {
        paddingBottom: "60%"
    }
})