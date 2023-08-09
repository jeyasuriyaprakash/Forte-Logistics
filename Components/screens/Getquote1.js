import React from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios';
import {SafeAreaView,StatusBar,View,ScrollView, StyleSheet,TouchableOpacity,Text, Image,Dimensions} from 'react-native';
import { DataTable } from 'react-native-paper';
const { width } = Dimensions.get("window");
import Spinner from "react-native-loading-spinner-overlay/lib";
import { Appbar, Avatar, List } from 'react-native-paper';

function Getquote({navigation,route}) {
    const[data,setData]=React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [show,setShow]=React.useState(false);
    const [show1,setShow1]=React.useState(false);
    const [show2,setShow2]=React.useState(false);
    const [show3,setShow3]=React.useState(false);
  
      React.useEffect(() => {
        axios
          .get(
            'http://52.52.76.24:3000/api/RecentRate?filter[where][type]=AR'
          )
          .then((res) => {
            console.log(res);
            setData(res.data);
setIsLoading(false);
          })
          .catch((err) => {
            console.log(err);
            setIsLoading(false);
          });
      }, []);

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
return (
  <SafeAreaView style={{backgroundColor:'#fff'}}>
    {getContent()}
    <Appbar.Header style={{ backgroundColor: 'white' }}>
<Appbar.Action  icon="keyboard-backspace" onPress={()=>navigation.navigate('Regester')}/>

    </Appbar.Header>
  <StatusBar backgroundColor="#fff" barStyle="dark-content" />
<View style={{padding:10}}>
    <ScrollView
      //showsVerticalScrollIndicator={false}
      //alwaysBounceVertical={false}
      //contentContainerStyle={styles.scrollViewContainer}
    >
      <View style={{flexDirection:'row',justifyContent:'space-between',padding:10}}>
    <Image  source={require('../assets/FedexPriority.png')} />
    <TouchableOpacity style={{backgroundColor:'#ccc',paddingLeft:20,paddingRight:20,padding:10,borderRadius:5,marginBottom:30,marginTop:30}} onPress={()=>setShow(!show)}>
            <Text style={{fontSize:16,}}>View</Text>
          </TouchableOpacity>
          </View>
	<Text style={{marginLeft:20}}>AR</Text>
  <DataTable style={styles.container}>
  
	<DataTable.Header style={styles.tableHeader}>
		<DataTable.Title>fuelsurcharge</DataTable.Title>
		<DataTable.Title>discount</DataTable.Title>
		<DataTable.Title>amc</DataTable.Title>
	</DataTable.Header>
  <View>
              {data.map((date) => {
                if (date.recentRateId===35){
                return (
                  <View>
	<DataTable.Row>
  
		<DataTable.Cell>{date.fuelsurcharge}</DataTable.Cell>
		<DataTable.Cell>{date.discount}</DataTable.Cell>
		<DataTable.Cell>{date.amc}</DataTable.Cell>

                
	</DataTable.Row>
  </View>
  )}
}
)}
</View>
   
          
	</DataTable>
  <View>{
    show ?(
  <DataTable style={styles.container} >
  <DataTable.Header style={styles.header}>
		<DataTable.Title>fuelsurcharge</DataTable.Title>
		<DataTable.Title style={{marginRight:20}}>discount</DataTable.Title>
		<DataTable.Title>amc</DataTable.Title>
        <DataTable.Title style={{marginRight:40}}>ca charges</DataTable.Title>
	</DataTable.Header>
  <View>
              {data.map((date) => {
                if (date.recentRateId===35){
                return (
                  <View>
	<DataTable.Row style={{borderWidth:1,}}>
  
		<DataTable.Cell>{date.fuelsurcharge}</DataTable.Cell>
		<DataTable.Cell>{date.discount}</DataTable.Cell>
		<DataTable.Cell>{date.amc}</DataTable.Cell>
        <DataTable.Cell>{date.caCharge}</DataTable.Cell>
                
	</DataTable.Row>
  </View>
  )}
}
)}
</View>

          
	</DataTable>
    ):null }
    </View>

    <View style={{flexDirection:'row',justifyContent:'space-between',padding:20}}> 
  <Image  source={require('../assets/Fedexeconomy.png')} />
<TouchableOpacity style={{backgroundColor:'#ccc',paddingLeft:20,paddingRight:20,padding:10,borderRadius:5,marginBottom:30,marginTop:30}} onPress={()=>setShow1(!show1)}>
            <Text style={{fontSize:16,}}>View</Text>
          </TouchableOpacity>
          </View>
	<Text style={{marginLeft:20}}>AR</Text>
  <DataTable style={styles.container}>
	<DataTable.Header style={styles.tableHeader}>
		<DataTable.Title>fuelsurcharge</DataTable.Title>
		<DataTable.Title>discount</DataTable.Title>
		<DataTable.Title>amc</DataTable.Title>
	</DataTable.Header>
  <View>
              {data.map((date) => {
                if (date.recentRateId===36){
                return (
                  <View>
	<DataTable.Row>
		<DataTable.Cell>{date.fuelsurcharge}</DataTable.Cell>
		<DataTable.Cell>{date.discount}</DataTable.Cell>
		<DataTable.Cell>{date.amc}</DataTable.Cell>
	</DataTable.Row>
  </View>
                )}})}
                </View>
    

	</DataTable>
  <View>{
    show1 ?(
  <DataTable style={styles.container}>
  <DataTable.Header style={styles.header}>
		<DataTable.Title>fuelsurcharge</DataTable.Title>
		<DataTable.Title style={{marginRight:20}}>discount</DataTable.Title>
		<DataTable.Title>amc</DataTable.Title>
        <DataTable.Title style={{marginRight:40}}>ca charges</DataTable.Title>
	</DataTable.Header>
  <View>
              {data.map((date) => {
                if (date.recentRateId===36){
                return (
                  <View>
	<DataTable.Row>
  
		<DataTable.Cell>{date.fuelsurcharge}</DataTable.Cell>
		<DataTable.Cell>{date.discount}</DataTable.Cell>
		<DataTable.Cell>{date.amc}</DataTable.Cell>
        <DataTable.Cell>{date.caCharge}</DataTable.Cell>
                
	</DataTable.Row>
  </View>
  )}
}
)}
</View>

          
	</DataTable>
    ):null }
    </View>
    <View style={{flexDirection:'row',justifyContent:'space-between',padding:20}}> 
  <Image  source={require('../assets/Yrc.png')} />
<TouchableOpacity style={{backgroundColor:'#ccc',paddingLeft:20,paddingRight:20,padding:10,borderRadius:5,marginBottom:30,marginTop:30}} onPress={()=>setShow2(!show2)}>
            <Text style={{fontSize:16,}}>View</Text>
          </TouchableOpacity>
          </View>

	<Text style={{marginLeft:20}}>AR</Text>
  <DataTable style={styles.container}>
	<DataTable.Header style={styles.tableHeader}>
		<DataTable.Title>fuelsurcharge</DataTable.Title>
		<DataTable.Title>discount</DataTable.Title>
		<DataTable.Title>amc</DataTable.Title>
	</DataTable.Header>
	<View>
              {data.map((date) => {
                if (date.recentRateId===37){
                return (
                  <View>
	<DataTable.Row>
		<DataTable.Cell>{date.fuelsurcharge}</DataTable.Cell>
		<DataTable.Cell>{date.discount}</DataTable.Cell>
		<DataTable.Cell>{date.amc}</DataTable.Cell>
	</DataTable.Row>
  </View>
                )}})} 
                </View>
	</DataTable>
  <View>{
    show2 ?(
  <DataTable style={styles.container}>
  <DataTable.Header style={styles.header}>
		<DataTable.Title>fuelsurcharge</DataTable.Title>
		<DataTable.Title style={{marginRight:20}}>discount</DataTable.Title>
		<DataTable.Title>amc</DataTable.Title>
        <DataTable.Title style={{marginRight:40}}>ca charges</DataTable.Title>
	</DataTable.Header>
  <View>
              {data.map((date) => {
                if (date.recentRateId===37){
                return (
                  <View>
	<DataTable.Row>
  
		<DataTable.Cell>{date.fuelsurcharge}</DataTable.Cell>
		<DataTable.Cell>{date.discount}</DataTable.Cell>
		<DataTable.Cell>{date.amc}</DataTable.Cell>
        <DataTable.Cell>{date.caCharge}</DataTable.Cell>
                
	</DataTable.Row>
  </View>
  )}
}
)}
</View>

          
	</DataTable>
    ):null }
    </View>
    <View style={{flexDirection:'row',justifyContent:'space-between',padding:20}}> 
  <Image style={{height:140,width:140,resizeMode:"contain"}}  source={require('../assets/Reddaway.png')} />
<TouchableOpacity style={{backgroundColor:'#ccc',paddingLeft:20,paddingRight:20,padding:10,borderRadius:5,marginBottom:50,marginTop:50}} onPress={()=>setShow3(!show3)}>
            <Text style={{fontSize:16,}}>View</Text>
          </TouchableOpacity>
          </View>  
  
	<Text style={{marginLeft:20}}>AR</Text>
  <DataTable style={styles.container}>
	<DataTable.Header style={styles.tableHeader}>
		<DataTable.Title>fuelsurcharge</DataTable.Title>
		<DataTable.Title>discount</DataTable.Title>
		<DataTable.Title>amc</DataTable.Title>
	</DataTable.Header>
	<View>
              {data.map((date) => {
                if (date.recentRateId===38){
                return (
                  <View>
	<DataTable.Row>
		<DataTable.Cell>{date.fuelsurcharge}</DataTable.Cell>
		<DataTable.Cell>{date.discount}</DataTable.Cell>
		<DataTable.Cell>{date.amc}</DataTable.Cell>
	</DataTable.Row>
  </View>
                )}})}
                </View>
  

	</DataTable>
  <View>{
    show3 ? (
  <DataTable style={styles.container}>
  <DataTable.Header style={styles.header}>
		<DataTable.Title>fuelsurcharge</DataTable.Title>
		<DataTable.Title style={{marginRight:20}}>discount</DataTable.Title>
		<DataTable.Title>amc</DataTable.Title>
        <DataTable.Title style={{marginRight:40}}>ca charges</DataTable.Title>
	</DataTable.Header>
  <View>
              {data.map((date) => {
                if (date.recentRateId===38){
                return (
                  <View>
	<DataTable.Row>
  
		<DataTable.Cell>{date.fuelsurcharge}</DataTable.Cell>
		<DataTable.Cell>{date.discount}</DataTable.Cell>
		<DataTable.Cell>{date.amc}</DataTable.Cell>
        <DataTable.Cell>{date.caCharge}</DataTable.Cell>
                
	</DataTable.Row>
  </View>
  )}
}
)}
</View>

          
	</DataTable>
    ):null }
    </View>
  </ScrollView>
  </View>
  </SafeAreaView>

);
};

export default Getquote;

const styles = StyleSheet.create({
container: {
	padding:5,
},
tableHeader: {
	backgroundColor: '#DCDCDC',
  borderColor:'#134c3e',
  borderWidth:1,
  textAlign:'center',
  justifyContent:'space-between',
  
},

  text: {
    fontWeight: "bold",
    fontSize: 15,
    color: "black",
  },
  textinput: {
    marginTop: 1,
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 30,
    fontSize: 20,
    color: "black",
    backgroundColor: "#fff",
    textAlignVertical: "center",
    boxsizing: "borderbox",
    top: 5,
    borderWidth: 2,
    borderColor: "black",
  },
  // imagetext: {
  //   Width: 244.54,
  //   Height: 85,
  //   Top: 66,
  //  Left: 200,
  //  resizeMode:'contain',
  //  alignSelf:'center',
  // },
  button: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "orange",
    borderRadius: 5,
    marginTop: 25,
  },
  textButton: {
    color: "white",
    fontWeight: "700",
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  header: {
    flexDirection: "row",
    width,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F6F6F6",
    borderWidth:1,
    borderColor:'#134C3E',
    paddingRight:20,
    marginRight:30,
  },
  headerTitle: { color: "#000", fontWeight: "bold", fontSize: 16 },
  saveAreaViewContainer: { flex: 1, backgroundColor: "#FFF" },
  viewContainer: { flex: 1, width, backgroundColor: "#FFF" },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: "10%",
    paddingBottom: "20%",
  },

  row: {
    flex: 1,
    flexDirection: "row",
  },
  inputWrap: {
    flex: 1,
    borderColor: "#cccccc",
  },
});
