import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
const {colors} = theme
export const style = StyleSheet.create({
  container: {
    marginTop: 30,
    width: '100%',
    maxWidth: 200,
    
    padding: 15,
    backgroundColor: colors.primary,
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-around'
  },
  content:{
   

    
  },
  text:{
    fontSize: 18,
    fontWeight:'600',
    color: '#fff'
  }
});