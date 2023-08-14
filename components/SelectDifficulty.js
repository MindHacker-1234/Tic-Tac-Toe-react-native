import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";

const SelectDifficult = ({ onSelectDifficult }) => {
  
    const [selectedText, setSelectedText] = useState(" Easy ");

    const handleDotClick = (level) => {
      setSelectedText(level);
      onSelectDifficult(level);
    };
    return (
        <View style={styles.container}>
          <View style={[styles.container1, selectedText === "Easy" && { borderColor: "#77B1FF" },]}>
            <TouchableOpacity
              style={selectedText === "Easy" ? styles.checkedDot : styles.uncheckedDot}
              onPress={() => handleDotClick("Easy")}
            />
            <Text style={[styles.data, selectedText === 'Easy' && styles.selectedText]}>Easy</Text>
            <View style={styles.redDot}></View>
          </View>
          <View style={[styles.container1, selectedText === "Medium" && { borderColor: "#77B1FF" },]}>
            <TouchableOpacity
              style={selectedText === "Medium" ? styles.checkedDot : styles.uncheckedDot}
              onPress={() => handleDotClick("Medium")}
            />
            <Text style={[styles.data, selectedText === 'Medium' && styles.selectedText]}>Medium</Text>
            <View style={styles.redDotContainer}>
            <View style={styles.redDot}></View>
            <View style={styles.redDot}></View>
            </View>
          </View>
          <View style={[styles.container1, selectedText === "Hard" && { borderColor: "#77B1FF" },]}>
            <TouchableOpacity
              style={selectedText === "Hard" ? styles.checkedDot : styles.uncheckedDot}
              onPress={() => handleDotClick("Hard")}
            />
            <Text style={[styles.data, selectedText === 'Hard' && styles.selectedText]}>Hard</Text>
            <View style={styles.redDotContainer}>
            <View style={styles.redDot}></View>
            <View style={styles.redDot}></View>
            <View style={styles.redDot}></View>
            </View>
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
        marginTop: 10,
        fontSize: 20,
    },
    selectedText: {
      color: "#77b1ff",
    },
    container1: {
        borderWidth: 2,
        borderColor: '#25374E',
        height: 90,
        width: 90,
        marginTop: 30, 
        borderRadius: 20,
        alignItems: "center",
        marginHorizontal: 10,
        backgroundColor: "#25374E",
    },
    redDotContainer: {
        flexDirection: "row",
    },
    redDot: {
        marginTop: 5,
        width: 10,
        height: 10,
        backgroundColor: "red",
        borderRadius: 50,
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
  
  export default SelectDifficult;