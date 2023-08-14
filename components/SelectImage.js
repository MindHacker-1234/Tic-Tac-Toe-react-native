import React from "react";
import { createContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from "react-native";
import { useState } from "react";
import { FlatList } from "react-native";
import SelectedImageContext from "./SelectedImageContext";



const SelectImage = ({ onSelect }) => {
    const [activeImage, setActiveImage] = useState(0);

    const images = [
          {
            id: 1,
            src: require("../assets/images/avatar1.png"),
          },
          {
            id: 2,
            src: require("../assets/images/avatar2.png"),
          },
          {
            id: 3,
            src: require("../assets/images/avatar3.png"),
          },
          {
            id: 4,
            src: require("../assets/images/avatar4.png"),
          },
          {
            id: 5,
            src: require("../assets/images/avatar5.png"),
          },
          {
            id: 6,
            src: require("../assets/images/avatar6.png"),
          },
    ];
    const handleImageSelect = (image) => {
        setActiveImage(image);
        onSelect(image);
    };

    return (
      <SelectedImageContext.Provider value={activeImage}>
        <FlatList horizontal={true}
        data={images}
        renderItem={({ item }) => (
          <TouchableOpacity
            key={item.id} 
            style={[styles.imageContainer, activeImage === item && { borderColor: "yellow", borderWidth: 2 }]}
            onPress={() => handleImageSelect(item)}
          >
          <View>
            <Image
              source={item.src}
              resizeMode="cover"
            />
            </View>
          </TouchableOpacity>
        )}
      />
       </SelectedImageContext.Provider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageContainer: {
        width: 100,
        height: 100,
        margin: 10,
        borderRadius: 50,
      },
      viewContainer: {
        height: 110,
        margin: 10,
        borderRadius: 50,
        borderColor: 'yellow',
        borderWidth: 2,
      },
      select: {
        borderColor: "yellow",
        borderWidth: 2,
      },


});

export default SelectImage;