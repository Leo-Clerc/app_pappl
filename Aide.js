import React, { Component } from 'react';
import { Text, StyleSheet, View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

/* eslint-disable prettier/prettier */
/**
 * 
 * @returns L'écran d'aide, contenant la documentation destinée à l'utilisateur.
 */
const Aide = () => {
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
        <Text style={styles.title}>Aide</Text>
        <Pressable
        style={styles.button}
        title="Revenir"
        onPress={() =>
          navigation.navigate('Accueil')
        }
        ><Text style={styles.buttonText}> Accueil </Text> </Pressable>
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
      width: 900,
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

export default Aide