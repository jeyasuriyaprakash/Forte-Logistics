import React, {useState} from 'react';
import { View,TouchableOpacity,Text,TextInput,StyleSheet, } from 'react-native';
import { Row } from 'react-native-table-component';


export const GetInput= ({addItemProp})=> {

const[clas,setClas]=useState('');
const[weight,setWeight]=useState('');

const addItem = _  => {
         addItemProp ({
  id : (new  Date).getTime(),
  clas,weight
  })
  setClas('');
  setWeight('');

}

  return ( 
  <View style={{ flex:1,}}>
<View  style={{flexDirection:'row'}} >
<Text  style={styles.textrow}>Class</Text>
<Text style={styles.textrows}>Weight</Text>
</View>

<View style={{ flexDirection: 'row', }}>
<TextInput  maxLength={3}
style={styles.textinputrow}
          keyboardType='numeric' 
                onChangeText={setClas}> </TextInput>  
               
<TextInput returnKeyType='none' maxLength={5}
style={styles.textinputrow}
          keyboardType='numeric' 
                onChangeText={setWeight}> </TextInput>
        <TouchableOpacity
        
        onPress={addItem}
      >  
        <Text style={styles.textinputrows}>ADD</Text>
      </TouchableOpacity>         
</View>
    </View>
  
  
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },

  textinput: {
    height: 50,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    marginHorizontal: 20,
    marginVertical: 0,
    borderRadius: 10,
    paddingLeft: 20,

  },
  text: {
    fontSize: 20,
    marginHorizontal: 20,
    marginVertical: 20,
    marginTop: 30,
    color: '#134c3e',
  },
  textrow: {
    fontSize: 20,
    color: '#134c3e',
    marginHorizontal: 0,
    marginVertical: 0,
    marginLeft: 20,
    marginRight: 0,
    marginTop: 30,
    

  },
  textrows: {
    fontSize: 20,
    color: '#134c3e',
    marginHorizontal: 0,
    marginVertical: 0,
    marginLeft: 63,
    marginRight: 0,
    marginTop: 30,
    

  },
  textinputrow: {
    height: 50,
    
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    marginHorizontal: 20,
    marginVertical: 20,
  
    borderRadius: 10,
    textAlign:'center',
    
    paddingLeft: 25,
    paddingRight: 25,
    marginLeft: 20 ,
   
   

  },
  textinputrows: {
    height: 50,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    marginHorizontal: 20,
    marginVertical: 20,
    borderRadius: 10,
    borderColor: '#134c3e',
    fontSize: 20,
    textAlign: 'center',
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop:10,
    flex:1,
  },
  // button: {
  //   padding: 12,
  //   marginTop:40,
  //   marginLeft:60,
  //   marginRight:60,
  //   backgroundColor:'#134c3e',
  //   borderRadius:15,

  // },

  header: {
    flexDirection: "row",
    
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F6F6F6",
  },

});