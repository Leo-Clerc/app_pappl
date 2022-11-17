import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
/**
 * 
 * @param {*} param0 navigation correspond à la pile d'écrans rencontrés, permettant de se déplacer d'un écran à un autre.
 * @returns Ce composant est le premier écran de jeu sur lequel arrive le joueur une fois les paramètres de la partie confirmés. Il affiche le composant "receveur" que le joueur doit remplir convenablement pour passer à l'écran suivant.
 */

const EcranDeJeu1 = ({ navigation }) => {
    return(
        <View>
        <Text>Le premier écran de jeu est là</Text>
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