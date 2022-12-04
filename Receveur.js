/**
 * @return Ce composant est l'interface à remplir par l'utilisateur sur l'écran de jeu 1
 */
import { Image, Text, TextInput, Button, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useState } from "react";
import React from 'react';
import { View } from "react-native";
import ChampAge from './ChampAge'
let imgSrc = require('./docteur.png');
const AgeDoc = 47;
const seqProteine = 'MYHKL'

const Receveur = () => {
    let [ageOk,setAgeOk] = useState(false)
    const [age, setAge] = useState(20)
    const navigation = useNavigation();
    let [proteineOk, setProteineOk] = useState(false)
    const changeAgeOk = (bool) => setAgeOk(bool);
    const changeAge = (value) => setAge(value)
    
    return <View>
                <Text>{ageOk ? "Oui" : "Non"}</Text>
                <Image style={{width: 300, height: 400}} source={imgSrc}/>
                <ChampAge bonAge={AgeDoc} age = {age} changeAge={changeAge} changeAgeOk = {changeAgeOk}/>
                <TextInput onChangeText={value => setProteineOk(value===seqProteine)}/>
                <>{ageOk&&proteineOk&&<Button title = "Continuer" onPress={() =>
          navigation.navigate('EcranDeJeu2')
        }/>}</>
        <Text>{ageOk}</Text>
            </View>
}

const styles = StyleSheet.create({
  
});

export default Receveur