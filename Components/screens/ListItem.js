import React from 'react';
import { View,Text,TouchableOpacity } from 'react-native';
import { DataTable } from 'react-native-paper';


export const ListItem = ({product,deleteItemProp}) => {

const deleteItem = _ => deleteItemProp(product)



  return (
    <View style={{margin:10}}>
      <DataTable style={{borderWidth:1,borderColor:'#134c3e'}}>
        <DataTable.Header  style={{marginLeft:10}}>
          <DataTable.Title> Class</DataTable.Title>
          <DataTable.Title style={{marginRight:60}}>weight</DataTable.Title>
          </DataTable.Header >
          <DataTable.Row >
            <DataTable.Cell>{ product.clas }</DataTable.Cell>
          <DataTable.Cell style={{marginLeft:30}}>{ product.weight }</DataTable.Cell>
          <DataTable.Cell>
            <TouchableOpacity style={{borderColor:'red',borderWidth:1,paddingLeft:20,paddingRight:20,padding:0,borderRadius:5,margin:10}} value="Delete"  onPress={deleteItem}>
            <Text style={{fontSize:20,color:'red'}}>X</Text>
          </TouchableOpacity>
            </DataTable.Cell>
            </DataTable.Row>
          </DataTable>
      </View>
  
  );
}

