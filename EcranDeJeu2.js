import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const nomDonneurCorrect = "Dr Maya Curado";
const ageDonneurCorrect = 36;
const donneursPotentiels = [["Léon Patounec", 22, "M"],["Dr Emilia Caubert",65, "F"],["Thomas Parker",61, "M"],["Béatrice Tapalinga",23, "F"],["Vlad Koscov",55,"M"]];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const positionDonneurCorrect = getRandomInt(4);

let indexFauxDonneurs = [];
while(indexFauxDonneurs.length<3){
  var nouvelIndex = getRandomInt(5)
  if(indexFauxDonneurs.indexOf(nouvelIndex)===-1){
    indexFauxDonneurs.push(nouvelIndex)
  }
}
const Donneurs =  [];
let donneurCorrectAjoute = false;
for(index=0;index<indexFauxDonneurs.length+1;index++){
  if(index==positionDonneurCorrect){
    Donneurs.push([nomDonneurCorrect, ageDonneurCorrect,"F"])
    donneurCorrectAjouté = true;
  }
  else if(!donneurCorrectAjoute){
  Donneurs.push(donneursPotentiels[indexFauxDonneurs[index]])
  }
  else{Donneurs.push(donneursPotentiels[indexFauxDonneurs[index-1]])}
}

const EcranDeJeu2 = ({ navigation }) => {
    return(
        <View>
        <Text>En travaux</Text>
        
        </View>
    )
}

export default EcranDeJeu2