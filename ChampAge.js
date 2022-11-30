import React from 'react';
import { useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import Slider from '@react-native-community/slider';

const ChampAge = ({bonAge, age, changeAge, changeAgeOk}) =>{
    return  <View>
    <TextInput style = {StyleSheet.input} value={age} onEndEditing = {value => changeAge(value)} keyboardType="phone-pad"/>
    <Slider
        value= {age}
        onValueChange={changeAge}
        onSlidingComplete={value => changeAgeOk(value==bonAge)}
        step = {1}
        minimumValue = {20}
        maximumValue = {80}
        
    />
</View>
}

export default ChampAge;