import React from 'react';
import { Text, View, TextInput } from 'react-native';
import Slider from '@react-native-community/slider';

const ChampAge = ({bonAge, age, changeAge, changeAgeOk}) =>{
    return  <View>
    <TextInput style = {StyleSheet.input} value = {age} onEndEditing = {(value) => changeAge(value)}/>
    <Slider
        value= {age}
        onValueChange={(value) => changeAge(value)}
        onSlidingComplete={(value) => changeAgeOk(value==bonAge)}
        step = {1}
        minimumValue = {20}
        maximumValue = {80}
        
    />
</View>
}

export default ChampAge;