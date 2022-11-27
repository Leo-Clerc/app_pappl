import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import Receveur from './Receveur';

const EcranDeJeu1 = ({ navigation }) => {
    return(
        <View>
        <Text>Le premier écran jeu est là</Text>
        <Receveur/>
        <Button
        title="Admettons que les infos soient correctes"
        onPress={() =>
          navigation.navigate('EcranDeJeu2')
        }
        />
        </View>
      
    );
}

export default EcranDeJeu1