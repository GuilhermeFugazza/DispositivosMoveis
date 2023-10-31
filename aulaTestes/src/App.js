import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Primeiro from './components/Primeiro';
import Comp, { Comp2, Comp3 } from './components/Multiplos';
import MinMax from "./components/MinMax"
import Style from "./Style.js";
import Pai from './components/indireta/Pai'
import Contador from "./components/Contador.js"
import ContadorV2 from "./contador/ContadorV2"
import ParImpar from './components/ParImpar';
import UserLogado from './components/UserLogado';
import ListaProdutos from './Produtos/ListaProdutos';

export default function App() {
    return (
        <SafeAreaView  style={Style.container}>
            <ListaProdutos />
        </SafeAreaView>
    )
}

