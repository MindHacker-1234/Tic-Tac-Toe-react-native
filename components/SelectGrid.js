import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";

const SelectGrid = ({ onSelectGrid }) => {
  
    const [selectedText, setSelectedText] = useState(" 3 x 3 ");

    const handleDotClick = (text) => {
      setSelectedText(text);
    };
    return (
        <View style={styles.container}>
          <View style={[styles.container1, selectedText === "3 x 3" && { borderColor: "#77B1FF" },]}>
            <TouchableOpacity
              style={selectedText === "3 x 3" ? styles.checkedDot : styles.uncheckedDot}
              onPress={() => handleDotClick("3 x 3")}
            />
            <Text style={[styles.data, selectedText === '3 x 3' && styles.selectedText]}>3 x 3</Text>
          </View>
          <View style={[styles.container1, selectedText === "4 x 4" && { borderColor: "#77B1FF" },]}>
            <TouchableOpacity
              style={selectedText === "4 x 4" ? styles.checkedDot : styles.uncheckedDot}
              onPress={() => handleDotClick("4 x 4")}
            />
            <Text style={[styles.data, selectedText === '4 x 4' && styles.selectedText]}>4 x 4</Text>
          </View>
          <View style={[styles.container1, selectedText === "5 x 5" && { borderColor: "#77B1FF" },]}>
            <TouchableOpacity
              style={selectedText === "5 x 5" ? styles.checkedDot : styles.uncheckedDot}
              onPress={() => handleDotClick("5 x 5")}
            />
            <Text style={[styles.data, selectedText === '5 x 5' && styles.selectedText]}>5 x 5</Text>
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
        width: 90,
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
  
  export default SelectGrid;
