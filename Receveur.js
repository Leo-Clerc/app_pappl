import { Image, Text, Platform } from "react-native";
import React from 'react';
import { View } from "react-native";
let imgSrc = require('./docteur.png');
const Receveur = () => {
    return <View>
                <Text>Test pour le web</Text>
                <Image style={{width: 300, height: 400}} source={imgSrc}/>
            </View>
}
export default Receveur