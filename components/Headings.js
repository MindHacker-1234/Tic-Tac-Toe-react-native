import React from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Font from 'expo-font';
import { useState, useEffect } from "react";


const Headings = () => {
    const [fontLoaded, setFontLoaded] = useState(false);

    useEffect(() => {
      const loadFonts = async () => {
        await Font.loadAsync({
          'SignPainterHouseScriptRegular': require('../assets/fonts/SignPainterHouseScriptRegular.ttf'),
        });
        setFontLoaded(true);
      };
      loadFonts();
    }, []);

    if (!fontLoaded) {
      return null;
    }
    return (
    <View style={styles.heading1} Horizontal = {false}>
        <Text style={styles.heading21 }> Welcome </Text>
        <Text style={styles.heading22}> Tic-Tac-Toe </Text>
    </View>
    );
    };

const styles = StyleSheet.create ({
    heading1: {
          flex: 1,
          flexDirection: "column",
          justifyContent: "center", 
          alignItems: "center", 
    },
    heading21: {
          color: '#ffffAD',
          fontSize: 28,  
          fontFamily: 'SignPainterHouseScriptRegular',    
    },
    heading22: {
        color: '#77b1ff',
        fontSize: 32, 
        fontFamily: 'SignPainterHouseScriptRegular',   
  },
    
});

export default Headings;