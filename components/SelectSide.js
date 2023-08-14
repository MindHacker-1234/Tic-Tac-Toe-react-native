import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";

const SelectSide = ({ onSelectSide }) => {
  
    const [selectedText, setSelectedText] = useState("X");

    const handleDotClick = (text) => {
      setSelectedText(text);
      onSelectSide(text);
    };
    return (
        <View style={styles.container}>
          <View style={[styles.container1, selectedText === "X" && { borderColor: "#77B1FF" },]}>
            <TouchableOpacity
              style={selectedText === "X" ? styles.checkedDot : styles.uncheckedDot}
              onPress={() => handleDotClick("X")}
            />
            <Text style={[styles.data, selectedText === 'X' && styles.selectedText]}>X</Text>
          </View>
          <View style={[styles.container1, selectedText === "O" && { borderColor: "#77B1FF" },]}>
            <TouchableOpacity
              style={selectedText === "O" ? styles.checkedDot : styles.uncheckedDot}
              onPress={() => handleDotClick("O")}
            />
            <Text style={[styles.data, selectedText === 'O' && styles.selectedText]}>O</Text>
          </View>
        </View>
      );
    };

  
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
    },
    data: {
        color: "#bfdaff",
        marginTop: 20,
        fontSize: 24,
    },
    selectedText: {
      color: "#77b1ff",
    },
    container1: {
        borderWidth: 2,
        borderColor: '#25374E',
        height: 90,
        width: 100,
        marginTop: 30, 
        borderRadius: 20,
        alignItems: "center",
        marginHorizontal: 10,
        backgroundColor: "#25374E",
    },
    checkedDot: {
      marginTop: 10,
      width: 15,
      height: 15,
      backgroundColor: "blue",
      borderRadius: 50,
      marginHorizontal: 10,
      justifyContent: "center",
      alignItems: "center",
    },
    uncheckedDot: {
      marginTop: 10,
      width: 15,
      height: 15,
      backgroundColor: "#010b1a",
      borderRadius: 50,
      borderWidth: 2,
      borderColor: "#bfdaff",
      marginHorizontal: 10,
    },
  });
  
  export default SelectSide;
