/**
 * @returns L'écran de fin de partie, affichant des messages et images différents selon comment l'utilisateur y est arrivé.
 */
import React, { Component } from 'react';
import { Text, View, Button, Image } from 'react-native';



const EcranDeFinDePartie = ({ route, navigation }) => {
  const gagne = route.params.gagne;  
  return(
        <View>
        <Text>Vous avez {gagne ? "gagné" : "perdu"}</Text>
        <Image style={{width: 300, height: 200}} source={gagne ? require('./pictures/congrats.gif') : require('./pictures/kermit-worried.gif')} />
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