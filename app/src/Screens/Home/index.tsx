import React from "react";
import { View, Text, Image} from "react-native";
import ilustartion from "../../assets/illustration.png"
import Ranked from "../../assets/ranked.svg"
import { Button } from "../../components/Button";
import { style } from "./style";



export function Home(){
    return(
        <View style={style.container}>
            <View style={style.content}>
                <Text style={style.text}>
                    hey homie
                    the photo bellow is
                </Text>
                <Text style={style.bold}>
                    png
                </Text>
                <Image 
                style={style.image}
                source={ilustartion}/>
            </View>
            <View style={style.content}>
                <Text style={style.text}>
                    and that photo bellow is
                </Text>
                <Text style={style.bold}>
                    svg
                </Text>
                <Ranked
                width={270}
                height={270}
               
                />
            </View>
            <Button icon={Ranked}/>
           
        </View>
    )
}