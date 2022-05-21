import React from "react";
import { View, Text, Image} from "react-native";
import ilustartion from "../../assets/illustration.png"
import Ranked from "../../assets/ranked.svg"
import { Button } from "../../components/Button";
import { style } from "./style";



export function Home(){
    return(
        <View style={style.container}>
            <View>
                <Text>
                    hey homie
                    the photo bellow is
                </Text>
                <Text>
                    png
                </Text>
                <Image source={ilustartion}/>
            </View>
            <View>
                <Text>
                    and that photo bellow is
                </Text>
                <Text>
                    svg
                </Text>
                <Ranked
                width={300}
                height={300}
               
                />
            </View>
            <Button
            icon={Ranked}
            />
        </View>
    )
}