import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Bolas from '../Bolas'

export default props => {
    return (
            <View style={Style.tree}>
                <Bolas alt='2%' larg='5%' cor="#7CCC3A" />
                <Bolas alt='2%' larg='7%' cor="#7CCC3A" />
                <Bolas alt='2%' larg='10%' cor="#7CCC3A" />
                <Bolas alt='2%' larg='12%' cor="#7CCC3A" />
                <Bolas alt='2%' larg='15%' cor="#7CCC3A" />
                <Bolas alt='2%' larg='17%' cor="#7CCC3A" />
                <Bolas alt='2%' larg='20%' cor="#7CCC3A" />
                <Bolas alt='2%' larg='22%' cor="#7CCC3A" />
                <Bolas alt='2%' larg='25%' cor="#7CCC3A" />
                <Bolas alt='2%' larg='27%' cor="#7CCC3A" />
                <Bolas alt='2%' larg='30%' cor="#7CCC3A" />
                <Bolas alt='2%' larg='32%' cor="#7CCC3A" />
                <Bolas alt='2%' larg='35%' cor="#7CCC3A" />
                <Bolas alt='2%' larg='37%' cor="#7CCC3A" />
                <Bolas alt='2%' larg='40%' cor="#7CCC3A" />
                <Bolas alt='2%' larg='42%' cor="#7CCC3A" />
                <Bolas alt='2%' larg='45%' cor="#7CCC3A" />
                <Bolas alt='2%' larg='47%' cor="#7CCC3A" />
                <Bolas alt='2%' larg='50%' cor="#7CCC3A" />
                <Bolas alt='2%' larg='52%' cor="#7CCC3A" />
                <Bolas alt='2%' larg='55%' cor="#7CCC3A" />
                <Bolas alt='2%' larg='57%' cor="#7CCC3A" />
                <Bolas alt='2%' larg='60%' cor="#7CCC3A" />
                <Bolas alt='2%' larg='62%' cor="#7CCC3A" />
                <Bolas alt='2%' larg='65%' cor="#7CCC3A" />
                <Bolas alt='2%' larg='13.5%' cor="#8B4513" />
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
    }
})