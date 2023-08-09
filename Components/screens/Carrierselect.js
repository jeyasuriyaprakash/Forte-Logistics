import React from "react";
import {View} from "react-native";
import {SelectList } from "react-native-dropdown-select-list";

const Carrierselect=()=>{
    const [selected, setSelected] = React.useState("");
    const[option, setOption]=React.useState([]);
const data1=[
    {key:'1' ,value:"FedexPriority"},
    {key:'2' ,value:"FedexEconomy"},
    {key:'3' ,value:"YRC"},
    {key:'4' ,value:"Reddaway"},
    
]


    return(
         
            <View style={{paddingTop:15}}>
            
            <SelectList  boxStyles={{marginLeft:20,marginRight:20,borderColor:'#b2b3b5'}}
            
            setSelected={(val) =>setOption(val)}
            data={data1}
            label="accessories"
            save="value"
            notFoundText="no data exist"
            //labelStyles={{fontWeight:'900',color:'red'}} 
            //checkBoxStyles={{backgroundColor:"white",borderWidth:0,
            //borderStyle:"solid",borderColor:"black",borderRadius:0}}
            />

        </View>
    )
};
export default Carrierselect;