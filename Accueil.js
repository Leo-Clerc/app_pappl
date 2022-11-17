import React, { Component } from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';
/**
 * 
 * @param {*} param0 navigation correspond à la pile d'écrans rencontrés, permettant de se déplacer d'un écran à un autre.
 * @returns Ce composant est l'écran d'accueil sur lequel l'application se lance. Il affiche ainsi une illustration, et comporte deux boutons. Le bouton "Aide" permet d'aller vers la section d'aide, le bouton "jouer" amène l'utilisateur sur l'écran de paramétrage de la partie.
 */

const Accueil = ({ navigation }) => {
  return (
  <View>
   <Text>"Transplant'Action'"</Text>
   <Button
        title="Jouer"
        onPress={() =>
          navigation.navigate('ParametragePartie')
        }
      />
      <Button
              title="Aide"
              onPress={() =>
                navigation.navigate('Aide')
              }
            />
      </View>
  );
  }
export default Accueil