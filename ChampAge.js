import React from 'react';
import { useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import Slider from '@react-native-community/slider';

const ChampAge = ({bonAge, correct}) =>{
    [age, setAge] = useState(20);
    return  <View>
    <Text>Âge rentré : {age}</Text>
    <TextInput value={age} />
    <Slider
        value= {age}
        onValueChange={setAge}
        step = {1}
        minimumValue = {20}
        maximumValue = {80}
        
    />
    <Text>La valeur rentrée est {(age==bonAge) ? "correct" : "incorrecte"}</Text>
</View>
}

export default ChampAge;