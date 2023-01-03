/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { Text, View, Button, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Donneur from './Donneur'
import {  Timer } from 'react-native-stopwatch-timer';

const nombreDeDonneurs = 4;
const nomDonneurCorrect = 'Dr Maya Curado';
const ageDonneurCorrect = 33;
const donneursPotentiels = [['Léon Patounec', 22, 'M',40],['Dr Emilia Caubert',65, 'F',60],['Thomas Parker',61, 'M',60],['Béatrice Tapalinga',23, 'F',0],['Vlad Koscov',37,'M',0]];

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
  const timer = global.time;
  const [isTimerStart, setIsTimerStart] = useState(true);
  const [timerDuration, setTimerDuration] = useState(timer);
  const [resetTimer, setResetTimer] = useState(false);
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
        <View style={styles.container}>
         <Timer 
            totalDuration={timerDuration}
            secs
            //Time Duration
            start={isTimerStart}
            //To start
            reset={resetTimer}
            //To reset
            options={options}
            //options for the styling
            handleFinish={() => {
              navigation.navigate('EcranDeFinDePartie', {gagne: false});
            }}
            //can call a function On finish of the time
            getTime={(time) => {
              time = time.split(':')
              time = (((Number(time[0])*3600) + (Number(time[1])*60) + Number(time[2])) * 1000) + Number(time[3])
              global.time = time;
              console.log(time);
            }}
          />
          <Text style={styles.title}> Étape 2 </Text>
          <Text style={styles.instruction}> Rentrer les informations relatives aux donneurs </Text>
        <Text>{resolu}</Text>
        <Text>
        {Donneurs}
        </Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'start',
    marginTop: 20,
    backgroundColor: 'white',
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
  },
  barreTexte: {
    textAlign: 'center',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 300,
    alignSelf: 'center',
    marginHorizontal: 10,
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#148ce8',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  instruction: {
    textAlign:'center',
    fontSize: 20,
    //fontStyle: 'italic',
    fontWeight: 'bold',
    margin: 10,
  },
  button: {
    textAlign: 'center',
    backgroundColor: '#148ce8',
    paddingHorizontal: 30,
    paddingVertical: 15,
    margin: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  buttonpressed: {
    textAlign: 'center',
    backgroundColor: '#accae0',
    paddingHorizontal: 30,
    paddingVertical: 15,
    margin: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  image: {
    alignSelf: 'center',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: 300,
    height: 300,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    margin: 5,
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000a0',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }, 
});

const options = {
  container: {
    backgroundColor: '#FF0000',
    padding: 5,
    borderRadius: 5,
    width: 200,
    alignItems: 'center',
    alignSelf: 'center',
  },
  text: {
    fontSize: 25,
    color: '#FFF',
    marginLeft: 7,
  },
};

export default EcranDeJeu2