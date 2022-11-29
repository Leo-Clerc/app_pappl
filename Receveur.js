/**
 * @return Ce composant est l'interface à remplir par l'utilisateur sur l'écran de jeu 1
 */
import { Image, Text, TextInput } from "react-native";
import React from 'react';
import { View } from "react-native";
import ChampAge from './ChampAge'
let imgSrc = require('./docteur.png');
const AgeDoc = 47;

const Receveur = () => {
    return <View>
                <Text>Test pour le web</Text>
                <Image style={{width: 300, height: 400}} source={imgSrc}/>
                <ChampAge bonAge={AgeDoc} correct = {false}/>
            </View>
}
export default Receveur