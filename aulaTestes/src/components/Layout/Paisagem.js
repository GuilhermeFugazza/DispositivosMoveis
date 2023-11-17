import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Tree1 from './Trees/Tree1'
import Tree2 from './Trees/Tree2'
import Tree3 from './Trees/Tree3'
import Tree4 from './Trees/Tree4'
import Tree5 from './Trees/Tree5'
import Sol from './Trees/Sol'

export default props => {
    return (
        <View style={Style.container}>
            <View style={Style.ceu}>
                <Sol />
            </View>
                <View style={Style.Flex3}>
                    <Tree1 />
                    <Tree2 />
                    <Tree3 />
                    <Tree4 />
                    <Tree5 />
                </View>
                <View style={Style.solo}></View>
        </View>
    )
}

const Style = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#663300',
    },

    Flex3: {
        flexDirection: 'row',
        width: '100%',
        height: '55%',
        justifyContent: 'flex-start',
        backgroundColor: "#00bff9",
        alignItems: 'flex-end',
    },
    solo: {
        height: '4%',
        width: '100%',
        backgroundColor: "#669900"
    },
    ceu: {
        height: '35%',
        backgroundColor: "#fff",
    }
})