import React from "react";
import {View, Text, TouchableOpacityBase, TouchableOpacity, TouchableOpacityProps} from 'react-native';

import { SvgProps } from "react-native-svg";

type buttonProps = TouchableOpacityProps &{
    icon: React.FC<SvgProps>
}

export function Button({icon:Icon,...res}: buttonProps){
    return(
        <TouchableOpacity >
            <Text>
                let's play
            </Text>
            <Icon
            width={20}
            height={20}
            />
        </TouchableOpacity>
    );
}