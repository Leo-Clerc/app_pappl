import React, { useState } from "react";
import Slider from 'react-native-slider';
const SliderAge = ({ageCorrect, reponse}) => {
    [ageEntre, setAgeEntre] = useState();
    return <Slider
            onValueChange = {(val)=> { setAgeEntre(val);
                            if(val==ageCorrect){reponse = true}}
            }
            minimumValue = {18}
            maximumValue = {80}
            renderInsideCircle={(val) => <Text>{val}</Text>}

            
    />

}
export default SliderAge