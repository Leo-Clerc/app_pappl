import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';


const EcranDeFinDePartie = ({ route, navigation }) => {
  const gagne = route.params.gagne;  
  return(
        <View>
        <Text>Vous avez {gagne ? "gagné" : "perdu"}</Text>
        <Button
        title="Revenir"
        onPress={() =>
          navigation.navigate('Accueil')
        }
        />
        </View>
        )
}

export default EcranDeFinDePartie