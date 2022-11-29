import React from 'react';
import { useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import Slider from '@react-native-community/slider';

const ChampAge = ({bonAge, ageOk, setAgeOk ,changeAgeOk}) =>{
    [age, setAge] = useState(20);
    return  <View>
    <Text>Âge rentré : {age}</Text>
    <TextInput value={age} onEndEditing = {setAge} editable ={true}/>
    <Slider
        value= {age}
        onValueChange={setAge}
        onSlidingComplete={value => changeAgeOk(value==bonAge)}
        step = {1}
        minimumValue = {20}
        maximumValue = {80}
        
    />
    <Text>La valeur rentrée est {ageOk ? "correcte" : "incorrecte"}</Text>
</View>
}

export default ChampAge;