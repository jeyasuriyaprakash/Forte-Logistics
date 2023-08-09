
import React,{useState} from 'react';
import { View } from 'react-native';
import { GetInput } from './GetInput';
import {ListItem }  from './ListItem';

function ItemList() {
const [items,setItems]=useState([]);

const addItem = item =>{
setItems([...items,item])
}

const deleteItem = item => {
  setItems(items.filter(itemProduct => itemProduct.id !== item.id  ))

}



    
  return (
    <View>
      <GetInput addItemProp =  {addItem}/>
      {
        items.map (item => <ListItem   key = { item.id}  product = {item}  deleteItemProp = {deleteItem} />)
      }
    </View>
  );
}


export default ItemList;