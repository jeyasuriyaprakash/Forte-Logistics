import React from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios';
import {SafeAreaView,StatusBar,View,ScrollView, StyleSheet,TouchableOpacity,Text, Image,Dimensions} from 'react-native';
import { DataTable } from 'react-native-paper';
const { width } = Dimensions.get("window");
import Spinner from "react-native-loading-spinner-overlay/lib";

function Getquote({navigation}) {
    const[data,setData]=React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const handleLogout = () => {
        AsyncStorage.clear();
        navigation.navigate("Regester");
      };
      
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
  <SafeAreaView >
    {getContent()}
  <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
  <View >
    <ScrollView
      showsVerticalScrollIndicator={false}
      alwaysBounceVertical={false}
      contentContainerStyle={styles.scrollViewContainer}
    >
    <Image 
        
        style={styles.imagetext} source={require('../assets/FedexPriority.png')} />
	<Text style={styles.text}>AR</Text>
  <DataTable style={styles.container}>
  
	<DataTable.Header style={styles.tableHeader}>
		<DataTable.Title>fuelsurcharge</DataTable.Title>
		<DataTable.Title>discount</DataTable.Title>
		<DataTable.Title>amc</DataTable.Title>
        <DataTable.Title>ca charges</DataTable.Title>
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
        <DataTable.Cell>{date.caCharge}</DataTable.Cell>
                
	</DataTable.Row>
  </View>
  )}
}
)}
</View>

          
	</DataTable>

      
  <Image 
        
        style={styles.imagetext} source={require('../assets/Fedexeconomy.png')} />
	<Text style={styles.text}>AR</Text>
  <DataTable style={styles.container}>
	<DataTable.Header style={styles.tableHeader}>
		<DataTable.Title>fuelsurcharge</DataTable.Title>
		<DataTable.Title>discount</DataTable.Title>
		<DataTable.Title>amc</DataTable.Title>
        <DataTable.Title>ca/charges</DataTable.Title>
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
                )}})}
                </View>


	</DataTable>
  <Image 
        
        style={styles.imagetext} source={require('../assets/Yrc.png')} />
	<Text style={styles.text}>AR</Text>
  <DataTable style={styles.container}>
	<DataTable.Header style={styles.tableHeader}>
		<DataTable.Title>fuelsurcharge</DataTable.Title>
		<DataTable.Title>discount</DataTable.Title>
		<DataTable.Title>amc</DataTable.Title>
        <DataTable.Title>cs/charges</DataTable.Title>
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
                )}})}
                </View>
    

	</DataTable>
  <Image 
        
        style={styles.imagetext} source={require('../assets/Reddaway.png')} />
	<Text style={styles.text}>AR</Text>
  <DataTable style={styles.container}>
	<DataTable.Header style={styles.tableHeader}>
		<DataTable.Title>fuelsurcharge</DataTable.Title>
		<DataTable.Title>discount</DataTable.Title>
		<DataTable.Title>amc</DataTable.Title>
        <DataTable.Title>ca/charges</DataTable.Title>
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
                )}})}
                </View>
    

	</DataTable>
  </ScrollView>
  </View>
  </SafeAreaView>

);
};

export default Getquote;

const styles = StyleSheet.create({
container: {
	padding: 15,
},
tableHeader: {
	backgroundColor: '#DCDCDC',
},
container1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
  imagetext: {
    Width: 244.54,
    Height: 85,
    Top: 66,
   Left: 200,
   resizeMode:'contain',
   alignSelf:'center',
  },
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

  dropdown1BtnStyle: {
    width: "80%",
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#444",
  },
  dropdown1BtnTxtStyle: { color: "#444", textAlign: "left" },
  dropdown1DropdownStyle: { backgroundColor: "#EFEFEF" },
  dropdown1RowStyle: {
    backgroundColor: "#EFEFEF",
    borderBottomColor: "#C5C5C5",
  },
  dropdown1RowTxtStyle: { color: "#444", textAlign: "left" },
  dropdown1SelectedRowStyle: { backgroundColor: "rgba(0,0,0,0.1)" },
  dropdown1searchInputStyleStyle: {
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#444",
  },

  dropdown2BtnStyle: {
    width: "80%",
    height: 50,
    backgroundColor: "#444",
    borderRadius: 8,
  },
  dropdown2BtnTxtStyle: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "bold",
  },
  dropdown2DropdownStyle: {
    backgroundColor: "#444",
    borderRadius: 12,
  },
  dropdown2RowStyle: { backgroundColor: "#444", borderBottomColor: "#C5C5C5" },
  dropdown2RowTxtStyle: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "bold",
  },
  dropdown2SelectedRowStyle: { backgroundColor: "rgba(255,255,255,0.2)" },
  dropdown2searchInputStyleStyle: {
    backgroundColor: "#444",
    borderBottomWidth: 1,
    borderBottomColor: "#FFF",
  },

  dropdown3BtnStyle: {
    width: "80%",
    height: 50,
    backgroundColor: "#FFF",
    paddingHorizontal: 0,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#444",
  },
  dropdown3BtnChildStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 18,
  },
  dropdown3BtnImage: { width: 45, height: 45, resizeMode: "cover" },
  dropdown3BtnTxt: {
    color: "#444",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
    marginHorizontal: 12,
  },
  dropdown3DropdownStyle: { backgroundColor: "slategray" },
  dropdown3RowStyle: {
    backgroundColor: "slategray",
    borderBottomColor: "#444",
    height: 50,
  },
  dropdown3RowChildStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 18,
  },
  dropdownRowImage: { width: 45, height: 45, resizeMode: "cover" },
  dropdown3RowTxt: {
    color: "#F1F1F1",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
    marginHorizontal: 12,
  },
  dropdown3searchInputStyleStyle: {
    backgroundColor: "slategray",
    borderBottomWidth: 1,
    borderBottomColor: "#FFF",
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
