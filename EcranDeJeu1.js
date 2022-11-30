import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import Receveur from './Receveur';

const EcranDeJeu1 = ({ navigation }) => {
    return(
        <View>
        <Text>Le premier écran de jeu est là</Text>
        <Receveur/>
        </View>
      
    );
}

export default EcranDeJeu1