import { useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text, SafeAreaView, StyleSheet, Image } from "react-native";
import SelectedImageContext from "../components/SelectedImageContext";
import { useContext } from "react";


const Game = ({  }) => {
  const images = [
    {
      id: 1,
      src: require("../assets/images/AI.png"),
    },
    {
      id: 2,
      src: require("../assets/images/avatar1.png")
    },
  ];
  const route = useRoute();
  const imageai = images[0].src;
  const defaultImage = images[1].src;
  const defaultName = "John Doe";
  const  name  = route.params.name;
  const displayName = name ? name : defaultName;
  const src = route.params.selectedImage?.src || require("../assets/images/avatar1.png");
  const displayImage = src ? src : defaultImage;
  const { selectedSide, selectedDifficult } = route.params;
  const oppositeSide = selectedSide === "X" ? "O" : "X";
  console.log(selectedSide, oppositeSide);
  let numDots = 1;
  if (selectedDifficult === 'Medium') {
    numDots = 2;
  } else if (selectedDifficult === 'Hard') {
    numDots = 3;
  }
  const dots = Array.from({ length: numDots }, (_, index) => (
    <View key={index} style={styles.dot} />
  ));

  return (
    <View style={styles.container}>
    <Text style={styles.title}> Your Turn! </Text>
           <View style={styles.container1}>
           <View style={styles.userContainer}>
            <View style = {styles.userContainerText}>
                    <Text style={styles.title1}> P1 - </Text>
                    <Text style={styles.title2}>{displayName}</Text>
            </View>
            <View style={styles.ImageContainer}>
              <Image style={styles.image1} source={displayImage}></Image>
              <Text style={styles.title3}> {selectedSide} </Text>
            </View>
            <View style={styles.Number}>
            <Text style={styles.title4}> 0 </Text>
            </View>
           </View>
           <View style={[styles.userContainer, styles.aiContainer]}>
           <View style = {[styles.userContainerText, styles.aiContainerText]}>
                    <Text style={[styles.title1, styles.title1Ai]}>P2 - </Text>
                    <Text style={[styles.title2, styles.titleAiName]}> AI </Text>
                    <View style={styles.dotsContainer}>
                      {dots}
                    </View>
            </View>
            <View style={[styles.ImageContainer,styles.aiImageContainer]}>
            <Image style={styles.image1} source={imageai}></Image>
            <Text style={[styles.title3, styles.title3Ai]}> {oppositeSide} </Text>
            </View>
            <View style={styles.Number}>
            <Text style={[styles.title4, styles.title4Ai]}> 0 </Text>
            </View>
           </View>
           </View>
    </View>
  );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: "#010b1a",
    },
    container1: {
      marginTop: 10,
      flexDirection: "row",
    },
    userContainer: {
        width: 120,
        height: 220,
        borderWidth: 2,
        borderColor: "#C4A8FF",
        borderRadius: 20,
    },
    aiContainer: {
      borderColor: "#FFD9AD",
      marginLeft: 100,
  },
    userContainerText: {
        color: '#C4A8FF',
        flexDirection: "row",
        borderBottomColor: "#C4A8FF",
        borderBottomWidth: 1,
        paddingVertical: 10,
    },
    aiContainerText: {
      color: '#FFD9AD',
      borderBottomColor: "#FFD9AD",
    },
    ImageContainer: {
      alignItems: "center",
      flexDirection: "column",
      borderBottomColor: "#C4A8FF",
      borderBottomWidth: 1,
      paddingVertical: 10,
      justifyContent: "center",
   },
   aiImageContainer: {
    borderBottomColor: "#FFD9AD",
   },
    title1: {
       color: '#C4A8FF',
       fontSize: 16,
       paddingLeft: 10,
       paddingTop: 5,
    },
    title1Ai: {
      color: '#FFD9AD',
   },
   titleAiName: {
    color: '#FFD9AD',
   },
    title2: {
      paddingTop: 5,
      fontSize: 16,
      color: '#C4A8FF',
    },
    title3: {
        paddingTop: 5,
        color: '#C4A8FF',
        fontSize: 24,
    },
    title3Ai: {
        color: '#FFD9AD',
    },
    title4: {
      paddingTop: 5,
      color: '#C4A8FF',
      fontSize: 34,
    },
    title4Ai: {
      color: '#FFD9AD',
    },
    Number: {
         flexDirection: "row",
         alignItems: "center",
         justifyContent: "center",
    },
    title: {
      fontSize: 14,
      fontWeight: 'bold',
      marginTop: 100,
      marginRight: 220,
      color: '#C4A8FF',  
    },
    dotsContainer: {
      flexDirection: 'row',
    },
    dot: {
      width: 10,
      height: 10,
      backgroundColor: 'red',
      borderRadius: 50,
      marginTop: 10,
      marginLeft: 5,
    },
    image1: {
      height: 60,
      width: 60,
    },
  });
  
  export default Game;