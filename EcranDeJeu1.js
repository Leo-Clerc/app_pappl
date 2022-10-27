import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';


const EcranDeJeu1 = ({ navigation }) => {
    return(
        <View>
        <Text>Le premier écran de jeu est là</Text>
        <Button
        title="Admettons que les infos soient correctes"
        onPress={() =>
          navigation.navigate('EcranDeJeu2')
        }
        />
        </View>
      
    );
}

export default EcranDeJeu1