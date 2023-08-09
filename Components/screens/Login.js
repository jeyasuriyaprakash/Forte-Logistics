import React from 'react'
import { View, Text,Image,Button,StyleSheet,style, TextInput,} from 'react-native';
// import { Entypo } from '@expo/vector-icons'; 
// import { Ionicons } from '@expo/vector-icons'; 
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Login = ({navigation}) =>  {
  return (
    
    <View style={styles.container}>

   
    
     
     <Image style={styles.image} source=
     
     {require('../../assets/forte.webp')} />
     <Text style={{fontSize:20,paddingLeft:20,paddingRight:20,textAlign:'center',color:'#134C3E',letterSpacing:2,marginTop:-80}}>Welcome to the Forte Rate 
             Calculation Portal
     </Text>
     <Text style={{paddingLeft:70,paddingRight:70,color:'#rgb(207,208,209)',fontSize:12,letterSpacing:1,}}>You may Sign in by using the 
           credential provided to you by Forte
     </Text>
     
          <TextInput style={styles.TextInput} placeholder='Enter your Phone or email'>     
    </TextInput >
          
          <TextInput style={styles.TextInput} placeholder='Password'></TextInput>
          {/* <TextInput style={styles.forgetPassword}>Forget Password?</TextInput> */}
    <View style={{borderRadius:10,}}>
          <Button  title='SUBMIT'  onPress={()=>navigation.navigate('Regester')}  color="#134C3E" />
          </View>
          {/* <Button  title='Create a new account' /> */}
       
       
       
        </View>
       
  )};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
    alignItems: 'center',
     justifyContent:'space-evenly',
    
  },

  TextInput:{
    borderWidth:1,
    borderRadius:10,
    borderColor:'#134C3E',
    width:'80%',
    marginRight:8,
    padding:8,
    letterSpacing:2,
  },
  
  image:{
    height:200,
    width:200

  },
  forgetPassword:{
    color:'#134C3E',

    
    
  }

  
  
 
});
export default  Login ;