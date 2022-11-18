import React, { Component } from 'react';
import { Text, View, Button, Image } from 'react-native';

/**
 * 
 * @param {*} param0 La route permettant de naviguer entre les écran est passée en propriété, ainsi que la navigation qui permet de tenir compte de si on gagne ou si on perd 
 * @returns Un composant qui est l'écran de fin de partie, affichant un texte et un gif approprié au contexte - Gagner ou perdre - et un bouton permettant de revenir à l'écran d'accueil.
 */

const EcranDeFinDePartie = ({ route, navigation }) => {
  const gagne = route.params.gagne;  
  return(
        <View>
        <Text>Vous avez {gagne ? "gagné" : "perdu"}</Text>
        <Image source={gagne ? require('./congrats.gif') : require('./kermit-worried.gif')} />
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