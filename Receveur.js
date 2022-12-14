/**
 * @return Ce composant est l'interface à remplir par l'utilisateur sur l'écran de jeu 1. Il affiche une image du docteur Sahe, et demande le sexe, l'âge et la séquence protéinique du docteur. L'âge est géré par le composant ChampAge
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
    const [ageOk,setAgeOk] = useState(false)
    const [age, setAge] = useState(20)
    const [genre, setGenre] = useState()
    const navigation = useNavigation();
    let [proteineOk, setProteineOk] = useState(false)
    const changeAgeOk = (bool) => setAgeOk(bool);
    const changeAge = (value) => setAge(value)
    
    return <View>
                <Image style={{width: 200, height: 300}} source={imgSrc}/>
                <Button title="Homme" onPress={() => setGenre(false)}/>
                <Button title="Femme" onPress={() => setGenre(true)}/>
                <ChampAge bonAge={AgeDoc} age = {age} changeAge={changeAge} changeAgeOk = {changeAgeOk}/>
                <TextInput onChangeText={value => setProteineOk(value===seqProteine)}/>
                <>{ageOk&&proteineOk&&genre&&<Button title = "Continuer" onPress={() =>
          navigation.navigate('EcranDeJeu2')
        }/>}</>
        <Text>{ageOk}</Text>
            </View>
}

const styles = StyleSheet.create({
  
});

export default Receveur