import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Bolas from '../Bolas'

export default props => {
    return (
            <View style={Style.tree}>
                <Bolas alt='2%' larg='5%' cor="#8EDE4C" />
                <Bolas alt='2%' larg='11%' cor="#8EDE4C" />
                <Bolas alt='2%' larg='13%' cor="#8EDE4C" />
                <Bolas alt='2%' larg='16%' cor="#8EDE4C" />
                <Bolas alt='2%' larg='18%' cor="#8EDE4C" />
                <Bolas alt='2%' larg='20%' cor="#8EDE4C" />
                <Bolas alt='2.5%' larg='23%' cor="#8EDE4C" />
                <Bolas alt='2.5%' larg='26%' cor="#8EDE4C" />
                <Bolas alt='2.5%' larg='29%' cor="#8EDE4C" />
                <Bolas alt='2.5%' larg='32%' cor="#8EDE4C" />
                <Bolas alt='2.5%' larg='35%' cor="#8EDE4C" />
                <Bolas alt='2.5%' larg='38%' cor="#8EDE4C" />
                <Bolas alt='2.5%' larg='41%' cor="#8EDE4C" />
                <Bolas alt='2.5%' larg='44%' cor="#8EDE4C" />
                <Bolas alt='2.5%' larg='46%' cor="#8EDE4C" />
                <Bolas alt='2.5%' larg='47%' cor="#8EDE4C" />
                <Bolas alt='2.5%' larg='48%' cor="#8EDE4C" />
                <Bolas alt='2.5%' larg='49%' cor="#8EDE4C" />
                <Bolas alt='2.5%' larg='50%' cor="#8EDE4C" />
                <Bolas alt='2.5%' larg='50%' cor="#8EDE4C" />
                <Bolas alt='2.5%' larg='50%' cor="#8EDE4C" />
                <Bolas alt='2.5%' larg='49%' cor="#8EDE4C" />
                <Bolas alt='2.5%' larg='48%' cor="#8EDE4C" />
                <Bolas alt='2.5%' larg='47%' cor="#8EDE4C" />
                <Bolas alt='2.5%' larg='46%' cor="#8EDE4C" />
                <Bolas alt='2.5%' larg='45%' cor="#8EDE4C" />
                <Bolas alt='2.5%' larg='44%' cor="#8EDE4C" />
                <Bolas alt='2.5%' larg='43%' cor="#8EDE4C" />
                <Bolas alt='2.5%' larg='42%' cor="#8EDE4C" />
                <Bolas alt='2.5%' larg='40%' cor="#8EDE4C" />
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
    }
})