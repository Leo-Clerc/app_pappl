import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import Receveur from './Receveur';

const EcranDeJeu1 = ({ navigation }) => {
    return(
        <View>
        <Text>Trouver les informations sur le docteur Saha pour continuer</Text>
        <Receveur/>
        </View>
      
    );
}

export default EcranDeJeu1