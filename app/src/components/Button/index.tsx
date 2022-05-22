import React from "react";
import {View, Text} from 'react-native';
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import { SvgProps } from "react-native-svg";
import { style} from "./styles";

type buttonProps = RectButtonProps &{
    icon: React.FC<SvgProps>
}

export function Button({icon:Icon,...res}: buttonProps){
    return(
        <RectButton style={style.container} >
         
            <Text style={style.text}>
                let's play
            </Text>
            <Icon
            width={30}
            height={30}
            />
        
           
        </RectButton>
    );
}