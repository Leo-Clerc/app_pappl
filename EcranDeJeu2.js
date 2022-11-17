import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
/**
 * 
 * @param {*} param0 navigation correspond à la pile d'écrans rencontrés, permettant de se déplacer d'un écran à un autre.
 * @returns Cet composant est le deuxième écran de jeu, qui s'affiche après la complétion du premier écran de jeu dans les temps. Il affiche 4 composants donneurs, que les joueurs doivent correctement remplir pour que les boutons "Choisir" apparaissent afin de se rendre sur l'écran de fin de partie en gagnat peut-être
 */

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