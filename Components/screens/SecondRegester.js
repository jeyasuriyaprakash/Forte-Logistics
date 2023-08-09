import * as React from 'react';
import { StyleSheet, TextInput, View, Text, Image ,Animated, Button, TouchableOpacity, ScrollView } from 'react-native';
import { Appbar, Avatar, List } from 'react-native-paper';
import { SelectList } from 'react-native-dropdown-select-list';
import { useRef, useState } from 'react';
import { DataTable } from 'react-native-paper';
import Spinner from "react-native-loading-spinner-overlay/lib";
//import { AuthContext } from "../../components/Context/AuthContext";
//import { useContext } from "react";
import axios from 'axios';
import Multiselect from './Multiselect';
import ItemList from './ItemList';
import Carrierselect from './Carrierselect';



const SecondRegester = ({navigation,}) => {

  const [showmenu, setShowMenu] = useState(false);
  const moveToRight = useRef(new Animated.Value(0)).current;
  const Scale = useRef(new Animated.Value(1)).current;

  const [selected, setSelected] = React.useState(null);
  const [data, setData] = React.useState([]);
  const [countrys, setCountrys] = React.useState([]);
  const [zipcode, setZipCode] = React.useState();
  const [countrys1, setCountrys1] = React.useState([]);
  const [zipcode1, setZipCode1] = React.useState();
  const [isLoading, setIsLoading] = React.useState(true);
  //const {userInfo}= useContext(AuthContext);
  const [show,setShow]= React.useState(false);


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
    []
  );
  
  React.useEffect(() => {
    axios
      .get(
        `http://52.52.76.24:3000/api/ZipCodeState?filter[where][zipCode]=${zipcode}`
      )
      .then((res) => {
        console.log(res);
        setCountrys(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [zipcode]);
  React.useEffect(() => {
    axios
      .get(
        `http://52.52.76.24:3000/api/ZipCodeState?filter[where][zipCode]=${zipcode1}`
      )
      .then((res) => {
        console.log(res);
        setCountrys1(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [zipcode1]);
  const getContent = () => {
    if (isLoading) {
      return <Spinner
      //visibility of Overlay Loading Spinner
      visible={isLoading}
      //Text with the Spinner
      textContent={'Loading...'}
      //Text style of the Spinner Text
      textStyle={styles.spinnerTextStyle}
    />
    }

    
  };
 const handleQuote=()=>{

  setSelected("")
  
  setData()
  setZipCode("")
  setZipCode1("")

  
  navigation.navigate('Getquote')

 }
  return (
    
    <View style={{ flex: 1}}>
      <View style={{ flex: 1, backgroundColor: '#134c3e' }}>
        <View style={{flexDirection:'row',}}>
            <Image style={{height:60,width:60,marginTop:50,marginLeft:20,borderRadius:50,borderColor:'#fff',borderWidth:1}}
             source={require('../assets/avather.jpg')} />
           <Text style={{marginTop:65,marginLeft:20,fontSize:25,color:'#fff'}}>Welcome</Text> 
           {/* <Appbar.Action style={{marginTop:60,marginLeft:50}} icon="menu" size={30} color={'#fff'}  onPress={() => {}} /> */}
        </View>
        <ScrollView>
        
        <View style={{marginTop:50,marginLeft:30,}}>
        
        <TouchableOpacity >

          <Text style={{fontSize:20,color:'#fff',marginBottom:40,}} onPress={()=>navigation.navigate('Getquote')} >
            SET MASTER DATA</Text>
         </TouchableOpacity>
         <TouchableOpacity>
          <Text style={{fontSize:20,marginBottom:40,color:'#fff'}}>CUSTOMER VIEW</Text>
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
          <Text style={{fontSize:20,marginBottom:40,color:'#fff'}}  onPress={()=>navigation.navigate('Mylogin')}>Logout</Text>
          </TouchableOpacity>
          <TouchableOpacity>
          <Text style={{fontSize:15,marginBottom:40,color:'#fff'}}>Version 1.0</Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
      </View>

             <Animated.View style={{
        flex: 1, backgroundColor: '#fff', position: 'absolute', left: 0, right: 0, top: 0,
        bottom: 0, transform:[{scale:Scale},{translateX:moveToRight}], justifyContent:'space-between'
       
      }} >
      <Appbar.Header style={{ backgroundColor: 'white',justifyContent:'space-between' }}>
        <Appbar.Action   style={{ marginLeft: 20 }} onPress={() => {
            Animated.timing(Scale, { 
              toValue: showmenu ? 1 : 1,
              duration: 300,
              useNativeDriver: true,
             }). start();
             Animated.timing(moveToRight, { 
              toValue: showmenu ? 0 : 270,
              duration: 300,
              useNativeDriver: true,
             }). start();
             setShowMenu(!showmenu);
            }}
             icon="menu" size={30} color={'#134c3e'} />
        <List.Image size={70} source={require('../assets/spla.jpg')} style={{ padding:40 }} />
        <Appbar.Action icon="bell-badge-outline" size={30} color={'#134c3e'} onPress={() => { }} style={{ marginLeft: 10 }} />
      </Appbar.Header>
      <ScrollView>
      <View>
        <Text style={styles.text}>Company</Text>

        <SelectList  boxStyles={{marginLeft:20,marginRight:20,borderColor:'#b2b3b5'}}
        setSelected={setSelected} 
        data={data} 
        //onSelect={()=>(selected)}
      />
        <Text style={styles.text}>Origin Zipcode</Text>
        <TextInput style={styles.textinput}placeholder="enter zipcode"
              value={zipcode}
              keyboardType='numeric'
              onChangeText={(newzipcode) => setZipCode(newzipcode)}>

        </TextInput>
        <View>
              {countrys.map((country) => {
                return (
                  <View>
                    <Text style={{marginLeft:25,fontSize:14,}}>
                      {country.city},{country.state}
                    </Text>
                  </View>
                );
              })}
            </View>
        <Text style={styles.text}>Destination Zipcode</Text>
        <TextInput style={styles.textinput} placeholder="enter zipcode"
              value={zipcode1}
              keyboardType="numeric"
              onChangeText={(newzipcode1) => setZipCode1(newzipcode1)}>
        </TextInput>
        <View>
              {countrys1.map((country1) => {
                return (
                  <View>
                    <Text style={{marginLeft:25,fontSize:14,}} >
                      {country1.city},{country1.state}
                    </Text>
                  </View>
                );
              })}
            </View>

        <View style={{ flexDirection: 'row' }}>
          <ItemList />
          {/*
          <Text style={styles.textrow} >Class</Text>
          <Text style={styles.textrow} >Weight</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TextInput style={styles.textinputrow} 
          keyboardType='numeric' 
                onChangeText={setClas}> </TextInput>

          <TextInput style={styles.textinputrow} 
          keyboardType='numeric'
                onChangeText={setWeight} > </TextInput>
          {/* <TouchableOpacity style={styles.textinputrows}> ADD  </TouchableOpacity> */}
      {/*    <TouchableOpacity
        style={styles.button1 }
        // onPress={onPress}
        onPress={()=> setShow(!show)}
      >  
        <Text style={{fontSize:24,color:'#134c3e'}}>ADD</Text>
      </TouchableOpacity>
        </View>
        <View>{
    show ? (
  <DataTable style={styles.container}>
  <DataTable.Header style={styles.header}>
		<DataTable.Title>Class</DataTable.Title>
		<DataTable.Title>Weight</DataTable.Title>
	
	</DataTable.Header>
	<DataTable.Row>
  
		<DataTable.Cell>{clas}</DataTable.Cell>
		<DataTable.Cell>{weight}</DataTable.Cell>

                
	</DataTable.Row>
   
	</DataTable>
    ):null }*/}
    </View>

        <Text style={styles.text}>Accessorials</Text>
       <Multiselect />
       <Text style={styles.text}>Choose Carrier</Text>
       <Carrierselect />
        <View >
          <TouchableOpacity  style={styles.button}   onPress={handleQuote} >
            <Text style={{textAlign:'center',color:'#fff',fontSize:20}}> Get Quote</Text>
            </TouchableOpacity>  
        </View>
      </View>
      </ScrollView>
      </Animated.View>
     
    </View>
  );
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
    marginRight: 70,
    marginTop: 30,
    

  },
  textinputrow: {
    height: 50,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    marginHorizontal: 20,
    marginVertical: 20,
    borderRadius: 10,
    flex:1,
    textAlign: 'center',
    paddingLeft: 0,
    paddingRight: 0,
    marginLeft: 17 ,
   

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
    paddingLeft: 30,
    paddingRight: 35,
  },
  button: {
    padding: 12,
    marginTop:40,
    marginLeft:60,
    marginRight:60,
    marginBottom:30,
    backgroundColor:'#134c3e',
    borderRadius:15,

  },
  button1: {
    height: 40,
    borderWidth: 1,
    
    marginHorizontal: 20,
    marginVertical: 20,
    borderRadius: 10,
    borderColor: '#134c3e',
  
    paddingTop:10,
    paddingLeft: 30,
    paddingRight: 30,
    
  },
  header: {
    flexDirection: "row",
    
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F6F6F6",
  },

});

export default SecondRegester;