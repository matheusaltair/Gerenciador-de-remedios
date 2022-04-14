import React from "react";
import { TextInput, StyleSheet, Dimensions } from "react-native";


const width  = Dimensions.get('window').width / 1.1
const height = Dimensions.get('window').height / 17


const InputText = ({ value: value, onChangeText: onChangeText, placeholder: placeholder, 
    keyboardType: keyboardType }) => {
    return <TextInput
                style={styles.textInput} 
                placeholder={placeholder}
                placeholderTextColor='#D3D3D3'
                value={value}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
                autoCapitalize='none'
                autoCorrect={false}
            />
}

const styles = StyleSheet.create({
    textInput :{
        marginTop: 30,
        paddingHorizontal: 15,
        backgroundColor: 'rgb(130, 10, 209)',
        fontWeight: 'bold',
        color: 'white',
        fontSize: 13,
        borderRadius: 8,
        width: width,
        height: height
    },
})


export default InputText;