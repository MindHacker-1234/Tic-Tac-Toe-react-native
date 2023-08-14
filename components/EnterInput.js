import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";

const EnterInput = ( { onNameChange } ) => {
    const [name, setName] = useState('');
    const handleNameChange = (textname) => {
        setName(textname);
        onNameChange(textname); 
      };
    return (
      <View style={styles.container}>
      <TextInput style={ styles.input} placeholderTextColor={'#BFDAFF'} value = {name} onChangeText={handleNameChange} placeholder="John Doe" />
      </View>
    );
};


const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingHorizontal: 20,
    },
    input: {
        color: '#BFDAFF',
        borderRadius: 10,
        backgroundColor: '#142848',
        height: 30,
        width: 300,
        fontSize: 16,
        paddingLeft: 10,
    },
})

export default EnterInput;