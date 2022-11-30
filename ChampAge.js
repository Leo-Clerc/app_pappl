import React from 'react';
import { useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import Slider from '@react-native-community/slider';

const ChampAge = ({bonAge, changeAgeOk}) =>{
    [age, setAge] = useState(20);
    return  <View>
    <Text>Âge rentré : {age}</Text>
    <TextInput style = {StyleSheet.input} value={age} onEndEditing = {value => setAge(value)} keyboardType="phone-pad"/>
    <Slider
        value= {age}
        onValueChange={setAge}
        onSlidingComplete={value => changeAgeOk(value==bonAge)}
        step = {1}
        minimumValue = {20}
        maximumValue = {80}
        
    />
</View>
}

export default ChampAge;