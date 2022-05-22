import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const {colors} = theme
export const style = StyleSheet.create({
    
    container:{
        flex: 1,
        backgroundColor: colors.blue,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content:{
        alignItems: 'center'
    },
    image:{
        height: 270,
        width: 270
    },
    text:{
        fontWeight: '600',

        color: '#fff',
        fontSize: 20
    },
    bold:{
        fontWeight: '900',
        color: colors.salmon,
        fontSize: 22,
        marginBottom: 10,
    }
})