import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, Button, TouchableOpacity } from "react-native";
import EnterInput from "../components/EnterInput";
import SelectImage from "../components/SelectImage";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';
import SelectedImageContext from "../components/SelectedImageContext";
import { useContext } from "react";

const Home = () => {
    const [checked, setChecked] = useState(true);
    const [name, setName] = useState(''); // State to hold the text input value
    const [selectedImage, setSelectedImage] = useState('');


    const navigation = useNavigation();
    const handleNameChange = (textname) => {
      setName(textname); 
    };
    const handleImageSelect = (image) => {
      setSelectedImage(image);
  };
  

    const handleNext = () => {
      setChecked(!checked);
      navigation.navigate('Settings',{name, selectedImage});
    };

   

    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.container1}>
            <Text style={styles.profile}> Profile </Text>
            <Text style={styles.name}> Name </Text>
            <EnterInput onNameChange={handleNameChange}/>
            <Text style={styles.name}> Choose your avatar </Text>
            <SelectImage onSelect={handleImageSelect} />
        </View>
      <View style={styles.footer}>
          <View style={styles.dots}>
            <View style={checked ? styles.checkedDot : styles.uncheckedDot} />
            <View style={checked ? styles.uncheckedDot : styles.checkedDot} />
          </View>
          <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.buttonContainer, { backgroundColor: "blue" }]}
            onPress={handleNext}
          >
          <Text style={styles.buttonText}>Next <Icon name="arrow-right" size={20} color="black" /></Text>
        </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#010b1a",
      flex: 1,
      alignItems: "center",
    },
    container1: {
      borderWidth: 1,
      borderColor: '#77b1ff',
      height: 300,
      width: 350,
      marginTop: 180, 
      borderRadius: 20,
    },
    profile: {
        padding: 20,
        paddingBottom: 1,
        fontSize: 14,
        color: '#BFDAFF',
      },
    name: {
        paddingTop: 10,
        paddingLeft: 20,
        fontSize: 14,
        color: '#77b1ff'
    },
    footer: {
      flex: 1,
      position: "absolute",
      bottom: 30,
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-between", 
      paddingHorizontal: 20, 
    },
    dots: {
      marginLeft: 180,
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
      paddingHorizontal: 20,
      marginLeft: 40,
    },
    buttonText: {
      fontSize: 16,
      color: "black",
      fontWeight: "bold",
      textAlign: "center",
    },
  
  
  });
  
export default Home;
