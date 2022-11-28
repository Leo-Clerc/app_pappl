import React, { Component } from 'react';
import { View ,Text, TextInput, Button } from 'react-native';
/**
 * 
 * @param {} param0 navigation correspond à la pile d'écrans rencontrés, permettant de se déplacer d'un écran à un autre.
 * @returns 
 */
const ParametragePartie = ({ navigation }) => {
    return(
        <View>
        <Text>Modifier la durée de la partie en minute ici:</Text>
        <TextInput 
        style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1
          }}
          DefaultValue="30"/>
          <Button
              title="Lancer la partie"
              onPress={() =>
                navigation.navigate('EcranDeJeu1')
              }
            />
        </View>
    )
}

export default ParametragePartie