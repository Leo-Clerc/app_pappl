import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';


const EcranDeFinDePartie = ({ navigation }) => {
    return(
        <View>
        <Text>Vous avez {gagne ? "gagné" : "perdu"}</Text>
        <Button
        title="Revenir à l'accueil"
        onPress={() =>
          navigation.navigate('Accueil')
        }
        />
        </View>
    )
}

export default EcranDeFinDePartie