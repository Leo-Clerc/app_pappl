import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Donneur from './Donneur'

const nombreDeDonneurs = 4;
const nomDonneurCorrect = "Dr Maya Curado";
const ageDonneurCorrect = 36;
const donneursPotentiels = [["Léon Patounec", 22, "M",40],["Dr Emilia Caubert",65, "F",20],["Thomas Parker",61, "M",40],["Béatrice Tapalinga",23, "F",60],["Vlad Koscov",55,"M",30]];

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
  const ages = []
  const changeAges = []
  const agesOk = []
  const changeAgesOk = []
  const genres=[]
  const changeGenres = []

  for(index=0;index<nombreDeDonneurs;index++){
    const [age,setAge] = useState(20);
    ages.push(age)
    const changeAge = (value) => setAge(value)
    changeAges.push(changeAge)
    const [ageOk,setAgeOk] = useState(false)
    agesOk.push(ageOk)
    const changeAgeOk = (value) => setAgeOk(value)
    changeAgesOk.push(changeAgeOk)
    const [genre,setGenre] = useState();
    genres.push(genre)
    const changeGenre = (value) => setGenre(value)
    changeGenres.push(changeGenre)
  }
  Donneurs = []
  let donneurCorrectAjoute = false;
for(let index=0;index<nombreDeDonneurs;index++){
  dernierStop = index;
  if(index==positionDonneurCorrect){
    Donneurs.push(<Donneur key={index.toString()} nom = {nomDonneurCorrect} age = {ages[index]} bonAge = {ageDonneurCorrect} 
    changeAge = {changeAges[index]} ageOk = {agesOk[index]} changeAgeOk = {changeAgesOk[index]} indicationGenre = "F" genre = {genres[index]} changeGenre={changeGenres[index]} compatibilite= {100}
    />)
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