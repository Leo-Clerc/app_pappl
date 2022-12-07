import React from 'react';
import { useState } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import Slider from '@react-native-community/slider';

const ChampAge = ({bonAge, age, changeAge, changeAgeOk}) =>{
    [ageTI, setAgeTI] = useState(age)
    return  <View>
    <TextInput style = {StyleSheet.input} value = {ageTI.toString()} onChangeText = {(value) => {setAgeTI(value)}} onBlur = {(value) => {value ? changeAge(Number(value)) : changeAge(20); changeAgeOk(age == value)}} keyboardType="numeric"  />
    <Slider
        value= {age}
        onValueChange={(value) => {changeAge(value); setAgeTI(value)}}
        onSlidingComplete={(value) => changeAgeOk(value==bonAge)}
        step = {1}
        minimumValue = {20}
        maximumValue = {80}
    />
    <Text>{typeof AgeTI}</Text>
</View>
}

export default ChampAge;