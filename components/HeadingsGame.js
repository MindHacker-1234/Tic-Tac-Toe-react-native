import React from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Font from 'expo-font';
import { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";

const Headings1 = () => {
    const [fontLoaded, setFontLoaded] = useState(false);
    const navigation = useNavigation();

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
    const handleSettingsPress = () => {
      navigation.goBack("Settings", {});
    };
    return (
    <View style={styles.heading1} Horizontal = {true}>
 
        <Text style={styles.heading22}> Tic-Tac-Toe </Text>
        <TouchableOpacity onPress={handleSettingsPress}>
        <View style={styles.heading21}>
        <Icon name="cog" size={20} color="blue" />
        </View>
        </TouchableOpacity>
    
    </View>
    );
    };

const styles = StyleSheet.create ({
    heading1: {
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between", 
          alignItems: "center",
    },
    heading22: {
        color: '#77b1ff',
        fontSize: 32, 
        fontFamily: 'SignPainterHouseScriptRegular',   
        marginLeft: -50,
  },
  heading21: {
      padding: 10,
      borderColor: "#77b1ff",
      borderRadius: 10,
      borderWidth: 2,
      marginLeft: 210,
  
  },

    
});

export default Headings1;