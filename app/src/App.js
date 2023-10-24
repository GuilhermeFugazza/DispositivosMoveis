import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Primeiro from './components/Primeiro';
import Comp, { Comp2, Comp3 } from './components/Multiplos';
import MinMax from "./components/MinMax"
import Style from "./Style.js";

import Contador from "./components/Contador.js"

export default function App() {
    return (
        <SafeAreaView  style={Style.container}>
            <Contador inicial={100} passo={1}/>
        </SafeAreaView>
    )
}

