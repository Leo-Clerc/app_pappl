import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import Slider from '@react-native-community/slider';

const ChampAge = ({bonAge, age, changeAge, changeAgeOk}) =>{
    return  <View>
    <TextInput style = {StyleSheet.input} value = {age} onChangeText = {(value) => {changeAge(value); changeAgeOk(value==bonAge)}} />
    
    
    <Button title="Test" onPress ={()=>changeAge(77)}/>
</View>
}

export default ChampAge;