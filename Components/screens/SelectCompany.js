import React from 'react';
import { StyleSheet, TextInput, View, Text, Image ,Animated, Button, TouchableOpacity, ScrollView } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import { useRef, useState } from 'react';
import axios from 'axios';

const SelectCompany = () => {
    const [selected, setSelected] = React.useState(null);
    const [data, setData] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(
        () =>
          //Get Values from database
          axios
            .get("http://52.52.76.24:3000/api/companyDetails")
            .then((response) => {
              // Store Values in Temporary Array
              
              let newArray = response.data.map((item) => {
                return {
                  key: item.id,
                  value: item.companyName,
                  
                };
              });
              //Set Data Variable
              setData(newArray);
              setIsLoading(false);
            })
            .catch((e) => {
              console.log(e);
              setIsLoading(false);
            }),
        []);

  return (
    <View>
<SelectList  boxStyles={{marginLeft:20,marginRight:20,borderColor:'#b2b3b5'}}
        setSelected={setSelected} 
        data={data} 
        onSelect={()=>(selected)}
        
      />
      </View>
  );
}

export default SelectCompany;
