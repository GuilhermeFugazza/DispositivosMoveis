import React from 'react';
import { SafeAreaView, Text } from 'react-native';

import Primeiro from './components/Primeiro';
import { Comp, Comp2, Comp3 } from './components/Multiplos';

export default function App() {
    return(
        <SafeAreaView>
            <Primeiro />
            <Comp />
            <Comp2 />
            <Comp3 />
        </SafeAreaView>
    ) 
}