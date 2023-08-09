import React from "react";
import {View} from "react-native";
import { MultipleSelectList } from "react-native-dropdown-select-list";

const Multiselect=()=>{
    const [selected, setSelected] = React.useState("");
    const[option, setOption]=React.useState([]);
const data1=[
    {key:'1' ,value:"LiftGate PickUp"},
    {key:'2' ,value:"LiftGate Delivery"},
    {key:'3' ,value:"Residential PickUp"},
    {key:'4' ,value:"Residential Delivery"},
    {key:'5' ,value:"LimitedAccess PickUp"},
    {key:'6' ,value:"LimitedAccess Delivery"},
    {key:'7' ,value:"Notify"},
    {key:'8' ,value:"Inside Delivery"},
    {key:'9' ,value:"Delivery Appoinment Required"},
    {key:'10' ,value:"Haz Mat"},
]


    return(
         
            <View style={{paddingTop:15}}>
            
            <MultipleSelectList  boxStyles={{marginLeft:20,marginRight:20,borderColor:'#b2b3b5',}}
            
            setSelected={(val) =>setOption(val)}
            data={data1}
            label="accessories"
            onSelect={setSelected} 
            save="value"
            notFoundText="no data exist"
            //labelStyles={{fontWeight:'900',color:'red'}} 
            //checkBoxStyles={{backgroundColor:"white",borderWidth:0,
            //borderStyle:"solid",borderColor:"black",borderRadius:0}}
            />

        </View>
    )
};
export default Multiselect;