import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const nombreDeDonneurs = 4;
const nomDonneurCorrect = "Dr Maya Curado";
const ageDonneurCorrect = 36;
const donneursPotentiels = [["Léon Patounec", 22, "M"],["Dr Emilia Caubert",65, "F"],["Thomas Parker",61, "M"],["Béatrice Tapalinga",23, "F"],["Vlad Koscov",55,"M"]];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const positionDonneurCorrect = getRandomInt(4);

let indexFauxDonneurs = [];
while(indexFauxDonneurs.length<nombreDeDonneurs-1){
  var nouvelIndex = getRandomInt(5)
  if(indexFauxDonneurs.indexOf(nouvelIndex)===-1){
    indexFauxDonneurs.push(nouvelIndex)
  }
}
/*const Donneurs =  [];
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
}*/

const EcranDeJeu2 = ({ navigation }) => {
  ages = []
  changeAges = []
  changeAgesOk = []
  genres=[]
  changeGenres = []

  for(index=0;index<nombreDeDonneurs;index++){
    [age,setAge] = useState(20);
    const changeAge = (value) => setAge(value)
    ages.push(age)
    changeAges.push(changeAge)
  }
  Donneurs = []
  let donneurCorrectAjoute = false;
for(let index=0;index<nombreDeDonneurs;index++){
  dernierStop = index;
  if(index==positionDonneurCorrect){
    Donneurs.push(<Text key={index.toString()}>Test, et c'est le bon : {index}</Text>)
    donneurCorrectAjoute = true;
  }
  else if(!donneurCorrectAjoute){
  Donneurs.push(<Text key={index.toString()}>Test {index+1}</Text>)
  }
  else{Donneurs.push(<Text key={index.toString()}>Test {index}+2</Text>)
}}  
 
  return(
        <View>
        {Donneurs}
        <Text>{dernierStop}</Text>
        </View>
    )
}

export default EcranDeJeu2