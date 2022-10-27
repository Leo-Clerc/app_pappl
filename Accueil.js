import React, { Component } from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';
const Accueil = ({ navigation }) => {
  return (
  <View>
   <Text>"Transplant'Action'"</Text>
   <Button
        title="Jouer"
        onPress={() =>
          navigation.navigate('ParametragePartie')
        }
      />
      <Button
              title="Aide"
              onPress={() =>
                navigation.navigate('Aide')
              }
            />
      </View>
  );
  }
export default Accueil