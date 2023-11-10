import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Bolas from '../Bolas'

export default props => {
    return (
            <View style={Style.tree}>
                <Bolas alt='3%' larg='5%' cor="#B6DE4C" />
                <Bolas alt='3%' larg='7.5%' cor="#B6DE4C" />
                <Bolas alt='3%' larg='10%' cor="#B6DE4C" />
                <Bolas alt='3%' larg='13%' cor="#B6DE4C" />
                <Bolas alt='3%' larg='15%' cor="#B6DE4C" />
                <Bolas alt='3%' larg='17.5%' cor="#B6DE4C" />
                <Bolas alt='3%' larg='20%' cor="#B6DE4C" />
                <Bolas alt='3%' larg='23%' cor="#B6DE4C" />
                <Bolas alt='3%' larg='25%' cor="#B6DE4C" />
                <Bolas alt='3%' larg='27.5%' cor="#B6DE4C" />
                <Bolas alt='3%' larg='30%' cor="#B6DE4C" />
                <Bolas alt='3%' larg='33%' cor="#B6DE4C" />
                <Bolas alt='3%' larg='35%' cor="#B6DE4C" />
                <Bolas alt='3%' larg='37.5%' cor="#B6DE4C" />
                <Bolas alt='3%' larg='40%' cor="#B6DE4C" />
                <Bolas alt='3%' larg='43%' cor="#B6DE4C" />
                <Bolas alt='3%' larg='45%' cor="#B6DE4C" />
                <Bolas alt='3%' larg='47.5%' cor="#B6DE4C" />
                <Bolas alt='3%' larg='50%' cor="#B6DE4C" />
                <Bolas alt='3%' larg='53%' cor="#B6DE4C" />
                <Bolas alt='3%' larg='55%' cor="#B6DE4C" />
                <Bolas alt='3%' larg='57.5%' cor="#B6DE4C" />
                <Bolas alt='3%' larg='60%' cor="#B6DE4C" />
                <Bolas alt='3%' larg='63%' cor="#B6DE4C" />
                <Bolas alt='3%' larg='65%' cor="#B6DE4C" />
                <Bolas alt='4%' larg='13.5%' cor="#8B4513" />
                <Bolas alt='4%' larg='14%' cor="#8B4513" />
                <Bolas alt='4%' larg='14.5%' cor="#8B4513" />
                <Bolas alt='4%' larg='15%' cor="#8B4513" />
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