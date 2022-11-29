/**
 * @return Ce composant est l'interface à remplir par l'utilisateur sur l'écran de jeu 1
 */
import { Image, Text, TextInput, Button } from "react-native";
import { useState } from "react";
import React from 'react';
import { View } from "react-native";
import ChampAge from './ChampAge'
let imgSrc = require('./docteur.png');
const AgeDoc = 47;
const seqProteine = "MYHKL"
const Receveur = () => {
    let [ageOk,setAgeOk] = useState(false)
    let [proteineOk, setProteineOk] = useState(false)

    const changeAgeOk = (bool) => setAgeOk(bool);
    const changeProteineOk = (bool) => setProteine(AgeOk);
    return <View>
                <Image style={{width: 300, height: 400}} source={imgSrc}/>
                <ChampAge bonAge={AgeDoc} ageOk = {ageOk} changeAgeOk = {changeAgeOk}/>
                <TextInput onEndEditing={value => setProteine(value==seqProteine)}/>
                <Text>La valeur rentrée EST {ageOk ? "correcte" : "incorrecte"}</Text>
                <>{ageOk&&proteineOk&&<Button title = "L'écran suivant"/>}</>
            </View>
}
export default Receveur