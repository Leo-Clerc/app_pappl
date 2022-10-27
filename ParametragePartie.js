import React, { Component } from 'react';
import { View ,Text, TextInput, Button } from 'react-native';

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