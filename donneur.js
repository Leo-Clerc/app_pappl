import { Image, Text, TextInput, Button, StyleSheet } from "react-native";

import { useState } from "react";
import React from 'react';
import { View } from "react-native";
import ChampAge from './ChampAge';

const Donneur = ({nom, bonAge, imageSource, changeAgeOk}) => {
    const [ageOk,setAgeOk] = useState(false);
    const [age, setAge] = useState(20);
    const [genre, setGenre] = useState();
    const changeAgeOk = (bool) => setAgeOk(bool);
    const changeAge = (value) => setAge(value);
    return <View>
            <Image source = {require(imageSource)}/>
            <Text>{nom}</Text>
            <Button title={}/>
            <ChampAge bonAge={AgeDoc} age = {age} changeAge={changeAge} changeAgeOk = {changeAgeOk}/>
    </View>
}