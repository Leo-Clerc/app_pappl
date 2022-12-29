import { Image, Text, TextInput, Button, StyleSheet } from "react-native";

import { useState } from "react";
import React from 'react';
import { View } from "react-native";
import ChampAge from './ChampAge';

const Donneur = ({nom, age , bonAge, imageSource, ageOk, changeAge, changeAgeOk, indicationGenre , genre, changeGenre, compatibilite, 
    correct                   
}) => {
    return <View>
            
            <Text>{nom}</Text>
            <Button title="Homme" onPress={() => changeGenre(indicationGenre==="M")}/>
            <Button title="Femme" onPress={() => changeGenre(indicationGenre==="F")}/>
            <ChampAge bonAge={bonAge} age = {age} changeAge={changeAge} changeAgeOk = {changeAgeOk}/>
            <>{ageOk&&genre&&<Text>Compatibilité : {compatibilite}%</Text>}</>
            <>{resolu&&<Button title={correct ? "gagner": "perdre"}/>}</>
    </View>
}

export default Donneur; 