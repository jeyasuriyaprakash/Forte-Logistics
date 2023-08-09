import React from 'react'
import { useRef, useState } from 'react';

import { StyleSheet, TextInput, View, Text, Image ,Animated, Button, TouchableOpacity, ScrollView } from 'react-native';
import { Appbar, Avatar, DataTable, List,   } from 'react-native-paper';



export default function Detailes (navigation) {

  const [showmenu, setShowMenu] = useState(false);
  const moveToRight = useRef(new Animated.Value(0)).current;
  const Scale = useRef(new Animated.Value(1)).current;
    


  return (
    <View style={{ flex: 1}}>
       <View style={{ flex: 1, backgroundColor: '#134c3e' }}>
        <View style={{flexDirection:'row',}}>
            <Image style={{height:60,width:60,marginTop:50,marginLeft:20,borderRadius:50,borderColor:'#fff',borderWidth:1}}
             source={require('../assets/avather.jpg')} />
             <Text style={{marginTop:65,marginLeft:20,fontSize:25,color:'#fff'}}>Welcome Bruse </Text>
        </View>
        <View style={{marginTop:50,marginLeft:30,}}>
        <TouchableOpacity >

          <Text style={{fontSize:20,color:'#fff',marginBottom:40,}}  >
            SET MASTER DATA</Text>
         </TouchableOpacity>
         <TouchableOpacity>
          <Text style={{fontSize:20,marginBottom:40,color:'#fff'}}   >
            CUSTOMER VIEW</Text>
          </TouchableOpacity>
          <TouchableOpacity>
          <Text style={{fontSize:20,marginBottom:40,color:'#fff'}}>INTERNAL VIEW</Text>
          </TouchableOpacity>
          <TouchableOpacity>
          <Text style={{fontSize:20,marginBottom:40,color:'#fff'}}>TOOLS</Text>
          </TouchableOpacity>
          <TouchableOpacity>
          <Text style={{fontSize:20,marginBottom:40,color:'#fff'}}>COMPANY</Text>
          </TouchableOpacity>
          <TouchableOpacity>
          <Text style={{fontSize:20,marginBottom:40,color:'#fff'}}>BILL OF LANDING</Text>
          </TouchableOpacity>
          <TouchableOpacity>
          <Text style={{fontSize:20,marginBottom:40,color:'#fff'}}>OPERATIONS</Text>
          </TouchableOpacity>
          <TouchableOpacity>
          <Text style={{fontSize:20,marginBottom:40,color:'#fff'}}>SALES</Text>
          </TouchableOpacity>
          <TouchableOpacity>
          <Text style={{fontSize:20,marginBottom:40,color:'#fff'}}>WMS</Text>
          </TouchableOpacity>
          <TouchableOpacity>
          <Text style={{fontSize:20,marginBottom:40,color:'#fff'}}>REPORT</Text>
          </TouchableOpacity>
          <TouchableOpacity>
          <Text style={{fontSize:20,marginBottom:40,color:'#fff'}}  onPress={()=>navigation.navigate('Login')}>Logout</Text>
          </TouchableOpacity>
          <TouchableOpacity>
          <Text style={{fontSize:15,marginBottom:40,color:'#fff'}}>Version 1.0</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Animated.View style={{
        flex: 1, backgroundColor: '#fff', position: 'absolute', left: 0, right: 0, top: 0,
        bottom: 0, transform:[{scale:Scale},{translateX:moveToRight}],
       
      }} >
    <View style={styles.tableheader}>
         <Appbar.Header style={{ backgroundColor: 'white' }}>
        <Appbar.Action  style={{ marginLeft: 20 }} onPress={() => {
            Animated.timing(Scale, { 
              toValue: showmenu ? 1 : 1,
              duration: 300,
              useNativeDriver: true,
             }). start();
             Animated.timing(moveToRight, { 
              toValue: showmenu ? 0 : 330,
              duration: 300,
              useNativeDriver: true,
             }). start();
             setShowMenu(!showmenu);
            }} 
             icon="menu" size={30} color={'#134c3e'}  />
        <List.Image size={60} source={require('../assets/spla.jpg')} style={{ paddingLeft: 100, marginLeft: 100 }} />
        <Appbar.Action icon="bell-badge-outline" size={30} color={'#134c3e'} onPress={() => {}} style={{ marginLeft: 100 }} />
      </Appbar.Header>
      <ScrollView>
      <View style={styles.Table}>

      <Image style={styles.tableimg} source={require('../assets/fedex.png')} />

      <TouchableOpacity
        style={styles.button}
       
      >
        <Text style={{fontSize:18,color:'#ffffff',}}>View</Text>
      </TouchableOpacity>
      </View>

      <View  style={styles.tablerow}>
   
     <DataTable>
    <DataTable.Header > 
    <DataTable.Title >Calories</DataTable.Title>
     <DataTable.Title >Calories</DataTable.Title>
          <DataTable.Title >Fat (g)</DataTable.Title>
          </DataTable.Header>
          <DataTable.Row>
       <DataTable.Cell >1</DataTable.Cell>
       <DataTable.Cell >2</DataTable.Cell>
       <DataTable.Cell >3</DataTable.Cell>
       <DataTable.Cell >4</DataTable.Cell>
     </DataTable.Row>
     

     </DataTable>
    </View>

    <View style={styles.tablerow}>
    <DataTable >
    <DataTable.Header > 
    <DataTable.Title >Calories</DataTable.Title>
     <DataTable.Title >Calories</DataTable.Title>
          <DataTable.Title >Fat (g)</DataTable.Title>
          </DataTable.Header>
          <DataTable.Row>
       <DataTable.Cell >1</DataTable.Cell>
       <DataTable.Cell >2</DataTable.Cell>
       <DataTable.Cell >3</DataTable.Cell>
       <DataTable.Cell >4</DataTable.Cell>
     </DataTable.Row>
    
     </DataTable>
    </View>

{/* ------------------------ 2 table------------------------ */}
<View style={styles.Table}>

<Image style={styles.tableimg} source={require('../assets/fedex.png')} />

<TouchableOpacity
  style={styles.button}
  // onPress={onPress}
>
  <Text style={{fontSize:18,color:'#ffffff',}}>View</Text>
</TouchableOpacity>
</View>

<View  style={styles.tablerow}>

<DataTable>
<DataTable.Header > 
<DataTable.Title >Calories</DataTable.Title>
<DataTable.Title >Calories</DataTable.Title>
    <DataTable.Title >Fat (g)</DataTable.Title>
    </DataTable.Header>
    <DataTable.Row>
 <DataTable.Cell >1</DataTable.Cell>
 <DataTable.Cell >2</DataTable.Cell>
 <DataTable.Cell >3</DataTable.Cell>
 <DataTable.Cell >4</DataTable.Cell>
</DataTable.Row>


</DataTable>
</View>

<View style={styles.tablerow}>
<DataTable >
<DataTable.Header > 
<DataTable.Title >Calories</DataTable.Title>
<DataTable.Title >Calories</DataTable.Title>
    <DataTable.Title >Fat (g)</DataTable.Title>
    </DataTable.Header>
    <DataTable.Row>
 <DataTable.Cell >1</DataTable.Cell>
 <DataTable.Cell >2</DataTable.Cell>
 <DataTable.Cell >3</DataTable.Cell>
 <DataTable.Cell >4</DataTable.Cell>
</DataTable.Row>

</DataTable>
</View>


{/* ------------------------ 3 table------------------------ */}

<View style={styles.Table}>

<Image style={styles.tableimg} source={require('../assets/fedex.png')} />

<TouchableOpacity
  style={styles.button}
  // onPress={onPress}
>
  <Text style={{fontSize:18,color:'#ffffff',}}>View</Text>
</TouchableOpacity>
</View>

<View  style={styles.tablerow}>

<DataTable>
<DataTable.Header > 
<DataTable.Title >Calories</DataTable.Title>
<DataTable.Title >Calories</DataTable.Title>
    <DataTable.Title >Fat (g)</DataTable.Title>
    </DataTable.Header>
    <DataTable.Row>
 <DataTable.Cell >1</DataTable.Cell>
 <DataTable.Cell >2</DataTable.Cell>
 <DataTable.Cell >3</DataTable.Cell>
 <DataTable.Cell >4</DataTable.Cell>
</DataTable.Row>


</DataTable>
</View>

<View style={styles.tablerow}>
<DataTable >
<DataTable.Header > 
<DataTable.Title >Calories</DataTable.Title>
<DataTable.Title >Calories</DataTable.Title>
    <DataTable.Title >Fat (g)</DataTable.Title>
    </DataTable.Header>
    <DataTable.Row>
 <DataTable.Cell >1</DataTable.Cell>
 <DataTable.Cell >2</DataTable.Cell>
 <DataTable.Cell >3</DataTable.Cell>
 <DataTable.Cell >4</DataTable.Cell>
</DataTable.Row>

</DataTable>
</View>

</ScrollView>
 

    </View>
    </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create ({

  tableheader:{
    backgroundColor:'#ffffff',
    height:'100%',
    
  },
 
  Table:{
    flexDirection:'row',
    justifyContent:'space-between',
    padding:20,
  },
  button:{
    height: 40,
    marginHorizontal: 20,
    marginVertical: 20,
    borderRadius: 10,
    backgroundColor:'#525252',
   justifyContent:'center',
    marginTop:50,
    paddingLeft: 20,
    paddingRight: 20,
  },
  tableimg:{
    marginTop:20,
    height:100,
    width:'50%'

  },
  tablerow:{
    borderColor:'#134c3e',
    borderWidth:1,
    padding:10,
    margin:20,
    
  },


});
