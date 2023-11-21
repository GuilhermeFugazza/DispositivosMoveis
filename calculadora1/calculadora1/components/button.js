import React from 'react';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchebleOpacity } from 'react-native';


const Button = () => {

  return (
    <View style={styles.button}>
        
    </View>
  );
}

export default Button;

const styles = StyleSheet.create({
    button: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        minWidth: 80,
        minHeight: 80
      }
});


