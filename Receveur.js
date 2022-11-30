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
const seqProteine = 'MYHKL'
const Receveur = ({navigation}) => {
    let [ageOk,setAgeOk] = useState(false)
    let [proteineOk, setProteineOk] = useState(false)
    const changeAgeOk = () => setAgeOk(prev => !prev);
    return <View>
                <Text>{ageOk ? "Oui" : "Non"}</Text>
                <Image style={{width: 300, height: 400}} source={imgSrc}/>
                <ChampAge bonAge={AgeDoc} changeAgeOk = {changeAgeOk}/>
                <TextInput onChangeText={value => setProteineOk(value===seqProteine)}/>
                <Text>La protéine rentrée EST {proteineOk ? "correcte" : "incorrecte"}</Text>
                <Text>On a une {("abc"==="abc") ? "égalité" : "inégalité"}</Text>
                <Text>{seqProteine}</Text>
                <>{ageOk&&proteineOk&&<Button title = "Continuer" onPress={() =>
          navigation.navigate('EcranDeJeu2')
        }/>}</>
            </View>
}
export default Receveur