import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

const nomDonneurCorrect = "Dr Maya Curado";
const ageDonneurCorrect = 36;
const donneursPotentiels = [["Léon Patounec", 22],["Dr Emilia Caubert",65],["Thomas Parker",61],["Béatrice Tapalinga",23],["Vlad Koscov",55]];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const positionDonneurCorrect = getRandomInt(4);

let indexFauxDonneurs = [];
while(indexFauxDonneurs.length<3){
  var nouvelIndex = getRandomInt(5)
  if(indexFauxDonneur.indexOf(nouvelIndex)===-1){
    indexFauxDonneurs.push(nouvelIndex)
  }
}
const fauxDonneurs = [donneursPotentiels]

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