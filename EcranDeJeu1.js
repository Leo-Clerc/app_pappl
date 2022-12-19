import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import Receveur from './Receveur';
/**
 * 
 * @param {*} param0 
 * @returns Le premier écran de jeu, qui affiche receveur.
 */
const EcranDeJeu1 = ({ navigation }) => {
    return(
        <View>
        <Text>Trouver les informations sur le docteur Saha pour continuer</Text>
        <Receveur/>
        </View>
      
    );
}

export default EcranDeJeu1