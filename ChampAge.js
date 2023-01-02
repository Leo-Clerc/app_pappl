/* eslint-disable prettier/prettier */
import React from 'react';
import { useState } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import Slider from '@react-native-community/slider';
import { StyleSheet } from 'react-native-web';

/**
 * 
 * @param {*} param0 
 * @returns Le composant permettant de recevoir un âge rentré par l'utilisateur pour répondre, et mettre à jour le booléen selon que l'utilisateur réponde correctement ou non
 */

const ChampAge = ({bonAge, age, changeAge, changeAgeOk}) =>{
    return  <View>
    <TextInput style = {styles.input} value = {age.toString()} onChangeText = {(value) => {changeAge(parseInt(value)); changeAgeOk(parseInt(value) == bonAge)}}  keyboardType="numeric"  />
    <Slider
        value= {age}
        onValueChange={(value) => {changeAge(value)}}
        onSlidingComplete={(value) => changeAgeOk(value==bonAge)}
        step = {1}
        minimumValue = {20}
        maximumValue = {80}
    />
</View>
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      }, 
});

export default ChampAge;