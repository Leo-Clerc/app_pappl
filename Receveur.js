import React, { useState } from "react";
import {Image, View, Switch, Text, TextInput } from 'react-native';
import SliderAge from './SliderAge';
const AGE_SAHA = 47;
const SEQ_ADN = "MYHKL"
const NOM_RECEVEUR = ""
var res_slider = false;
var res_txt = false
const Receveur = () => {
    const [reponse, setReponse] = useState(false);
  const toggleSwitch = () => setReponse(previousState => !previousState);
    return( 
    <View>
        <Image source={require('./docteur.png')}/>
        <Switch
        onValueChange={toggleSwitch}
        value={reponse}
        />
        <SliderAge 
            ageCorrect={AGE_SAHA}
            reponse = {res_slider}
        />
        <Text>Séquence de la protéine</Text>
        <TextInput
        onChange={(text) => {if(text==SEQ_ADN){res_txt = true};
        }}/>
        <Text>L'âge rentré est {res_slider ? "le bon" : "faux"}</Text>
        <Text>La séquence rentrée est {res_txt ? "la bonne" : "fausse"}</Text>
    </View>    
    )
}
export default Receveur