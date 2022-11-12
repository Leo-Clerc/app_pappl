import React, { Component } from 'react';
import { Text, View, Button, Image } from 'react-native';


const EcranDeFinDePartie = ({ route, navigation }) => {
  const gagne = route.params.gagne;  
  return(
        <View>
        <Text>Vous avez {gagne ? "gagné" : "perdu"}</Text>
        <Image source={gagne ? require(".\winning") : require(".\sad")} />
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