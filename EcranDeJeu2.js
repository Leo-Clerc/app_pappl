import React, { useState, useEffect } from 'react';
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
  let [resolu,setResolu] = useState(false); 
  const verifierTout = () => {if(genres.every(Boolean)&&agesOk.every(Boolean)){setResolu(resolu=true)}};
  useEffect(() => verifierTout());
  for(index=0;index<nombreDeDonneurs;index++){
    const [age,setAge] = useState(20);
    ages.push(age)
    const changeAge = (value) => setAge(value)
    changeAges.push(changeAge)
    const [ageOk,setAgeOk] = useState(false)
    agesOk.push(ageOk)
    const changeAgeOk = (value) => {setAgeOk(value);}
    changeAgesOk.push(changeAgeOk)
    const [genre,setGenre] = useState();
    genres.push(genre)
    const changeGenre = (value) => {setGenre(value);}
    changeGenres.push(changeGenre)
  }
  const Donneurs = []
  let donneurCorrectAjoute = false;
for(let index=0;index<nombreDeDonneurs;index++){
  dernierStop = index;
  if(index==positionDonneurCorrect){
    Donneurs.push(<Donneur key={index.toString()} nom = {nomDonneurCorrect} age = {ages[index]} bonAge = {ageDonneurCorrect} 
    changeAge = {changeAges[index]} ageOk = {agesOk[index]} changeAgeOk = {changeAgesOk[index]} indicationGenre = "F" genre = {genres[index]} changeGenre={changeGenres[index]} compatibilite= {100}
    correct = {true} resolu = {resolu} 
    />)
    donneurCorrectAjoute = true;
  }
  else if(!donneurCorrectAjoute){
  Donneurs.push(<Donneur key={index.toString()} nom = {donneursPotentiels[indexFauxDonneurs[index]][0]} 
  age = {ages[index]} 
  bonAge = {donneursPotentiels[indexFauxDonneurs[index]][1]} 
  changeAge = {changeAges[index]} ageOk = {agesOk[index]} changeAgeOk = {changeAgesOk[index]} 
  indicationGenre = {donneursPotentiels[indexFauxDonneurs[index]][2]}
  genre = {genres[index]} 
  changeGenre={changeGenres[index]} 
  compatibilite= {donneursPotentiels[indexFauxDonneurs[index]][3]}
  correct = {false} resolu = {resolu} 
  />)
  }
  else{Donneurs.push(<Donneur key={index.toString()} nom = {donneursPotentiels[indexFauxDonneurs[index-1]][0]} 
  age = {ages[index]} 
  bonAge = {donneursPotentiels[indexFauxDonneurs[index-1]][1]} 
  changeAge = {changeAges[index]} ageOk = {agesOk[index]} changeAgeOk = {changeAgesOk[index]} 
  indicationGenre = {donneursPotentiels[indexFauxDonneurs[index-1]][2]}
  genre = {genres[index]} 
  changeGenre={changeGenres[index]} 
  compatibilite= {donneursPotentiels[indexFauxDonneurs[index-1]][3]}
  correct = {false} resolu = {resolu} 
  />)
}}  
 
  return(
        <View>
        {Donneurs}
        </View>
    )
}

export default EcranDeJeu2