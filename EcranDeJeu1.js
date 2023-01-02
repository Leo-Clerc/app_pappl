/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Text, View, Button, Pressable, StyleSheet, scrollView } from 'react-native';
import Receveur from './Receveur';
/**
 * 
 * @param {*} param0 
 * @returns Le premier écran de jeu, qui affiche receveur.
 */
const EcranDeJeu1 = ({ navigation }) => {
    return(
        <View style={styles.container}>
        <Text style={styles.title} > Étape 1: </Text>
        <Text style={styles.instruction}>Trouver les informations sur le docteur Saha pour continuer</Text>
        <Receveur/>
        </View>      
    );
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
    image: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      opacity: 1,
      tintColor: 'black',
    },
    text: {
      color: 'white',
      fontSize: 42,
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: '#000000a0',
    },
  });

export default EcranDeJeu1