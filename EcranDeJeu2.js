import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';


const EcranDeJeu2 = ({ navigation }) => {
    return(
        <View>
        <Text>Le deuxième écran de jeu est là</Text>
        <Button
        title="Gagner"
        onPress={() =>
          navigation.navigate('EcranDeFinDePartie',{
            gagne: true
          })
        }
        />
        <Button
        title="Perdre"
        onPress={() =>
          navigation.navigate('EcranDeFinDePartie',{
            gagne: false
          })
        }
        />
        </View>
    )
}

export default EcranDeJeu2