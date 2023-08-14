import React from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import * as Font from 'expo-font';
import SelectSide from "../components/SelectSide";
import SelectGrid from "../components/SelectGrid";
import SelectDifficult from "../components/SelectDifficulty";
import { useNavigation } from "@react-navigation/native"
import Icon from 'react-native-vector-icons/FontAwesome';
import { useRoute } from "@react-navigation/native";
import SelectedImageContext from "../components/SelectedImageContext";
import { useContext } from "react";

const Settings = ( {navigation}) => {
 
    const route = useRoute();
 
    const [ selectedSide, setSelectedSide ] = useState("X");
    const [ selectedDifficult, setSelectedDifficult ] = useState("Easy");
    const { name, selectedImage } = route.params;

    const [checked, setChecked] = useState(false);
    const [fontLoaded, setFontLoaded] = useState(false);
    const handleSideSelect = ( Text ) => {
      setSelectedSide(Text);
    };

    const handleDifficultyLevel = ( level ) => {
      setSelectedDifficult(level);
    };
    const previousScreen = () => {
      navigation.goBack('Home');
    }
    const nextScreen = () => {
      navigation.navigate('Game',{selectedSide, selectedDifficult, name, selectedImage});
    }

    useEffect(() => {
      const loadFonts = async () => {
        await Font.loadAsync({
          'sofia': require('../assets/fonts/SofiaProRegular.ttf'),
        });
        setFontLoaded(true);
      };
      loadFonts();
    }, []);

    if (!fontLoaded) {
      return null;
    }
    return (
    <SafeAreaView style={styles.container}>
         <View style={styles.container1}>
           <Text style={styles.data}> GAME SETTINGS </Text>
           <Text style={styles.data}> Select side </Text>
           <SelectSide onSelectSide={(selectedSide) => handleSideSelect(selectedSide)}/>
           <Text style={styles.data}> Select grid size </Text>
           <SelectGrid />
           <Text style={styles.data}> Select difficulty level </Text>
           <SelectDifficult onSelectDifficult={(selectedDifficult) => handleDifficultyLevel(selectedDifficult)} />
        </View>
        <View style={styles.footer}>
        <TouchableOpacity
            style={[styles.buttonContainer1, { backgroundColor: "blue" }]}
            onPress={previousScreen}
          >
          <Text style={styles.buttonText}><Icon name="arrow-left" size={15} color="black"/> Previous </Text>
        </TouchableOpacity>
          <View style={styles.dots}>
            <View style={checked ? styles.checkedDot : styles.uncheckedDot} />
            <View style={checked ? styles.uncheckedDot : styles.checkedDot} />
          </View>
          <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.buttonContainer, { backgroundColor: "blue" }]}
            onPress={nextScreen}
          >
          <Text style={styles.buttonText}> Start Playing <Icon name="arrow-right" size={15} color="black" /> </Text>
        </TouchableOpacity>
          </View>
          </View>
    </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#010b1a',
        alignItems: 'center',
    },
    container1: {
        borderWidth: 1,
        borderColor: '#77b1ff',
        height: 500,
        width: 350,
        marginTop: 150, 
        borderRadius: 20,
      },
      data: {
        color: '#BFDAFF',
        paddingTop: 10,
        paddingHorizontal: 10,
        fontFamily: 'sofia',
      },
      footer: {
        flex: 1,
        position: "absolute",
        bottom: 30,
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 20, 
        justifyContent:"center",
      },
      dots: {
        marginLeft: 50,
        flexDirection: "row",
        alignItems: "center", 
      },
      checkedDot: {
        width: 10,
        height: 10,
        backgroundColor: "blue",
        borderRadius: 50,
        marginHorizontal: 10,
      },
      uncheckedDot: {
        width: 10,
        height: 10,
        backgroundColor: "#010b1a",
        borderRadius: 50,
        borderWidth: 2,
        borderColor: "blue",
      },
      buttonContainer: {
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginLeft: 5,
      },
      buttonContainer1: {
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginLeft: 25,
      },
      buttonText: {
        fontSize: 16,
        color: "black",
        fontWeight: "bold",
        textAlign: "center",
        fontFamily: 'sofia',
      },
})

export default Settings;