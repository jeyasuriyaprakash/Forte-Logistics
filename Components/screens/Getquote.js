import React from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios';
import { SafeAreaView, StatusBar, View, ScrollView, StyleSheet, TouchableOpacity, Text, Image, Dimensions } from 'react-native';
import { DataTable } from 'react-native-paper';
const { width } = Dimensions.get("window");
import Spinner from "react-native-loading-spinner-overlay/lib";
import { Appbar, Avatar, List } from 'react-native-paper';
import { Col, Row, Grid } from 'react-native-easy-grid';
function Getquote({ navigation, route }) {
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [show, setShow] = React.useState(false);
  const [show1, setShow1] = React.useState(false);
  const [show2, setShow2] = React.useState(false);
  const [show3, setShow3] = React.useState(false);

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
    <View style={styles.maincontainer}>
      {getContent()}
      <Appbar.Header style={{ backgroundColor: 'white' }}>
        <Appbar.Action icon="keyboard-backspace" onPress={() => navigation.navigate('Regester')} />

      </Appbar.Header>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={{ margin: 8 }}>
        <ScrollView 
        showsVerticalScrollIndicator={false}
          alwaysBounceVertical={false}
          contentContainerStyle={styles.scrollViewContainer}>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
            <Image source={require('../../Components/assets/FedexPriority.png')} />
            <TouchableOpacity style={{ backgroundColor: '#ccc', paddingLeft: 20, paddingRight: 20, padding: 10, borderRadius: 5, marginBottom: 30, marginTop: 30 }} onPress={() => setShow(!show)}>
              <Text style={{ fontSize: 16, }}>View</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.color}>AR</Text>
          <DataTable >
            <View style={{ flex: 1 }}>
                 {data.map((date) => {
                if (date.recentRateId===35){
                return (
                  <View>
            <View style={styles.container}>
              
                <Grid>
                  <Col size={25}>
                    <Row style={styles.cell}>
                      <Text style={styles.colors}>Fuelsurcharge</Text>
                    </Row>

                    <Row style={styles.cell1}>
                      <Text>{date.fuelsurcharge}</Text>
                    </Row>

                  </Col>
                  <Col size={25}>
                    <Row style={styles.cell}>
                      <Text style={styles.colors}>Discount</Text>
                    </Row>
                    <Row style={styles.cell1}>
                      <Text>{date.discount}</Text>
                    </Row>

                  </Col>
                  <Col size={25}>
                    <Row style={styles.cell}>
                      <Text style={styles.colors}>Amc</Text>
                    </Row>
                    <Row style={styles.cell1}>
                      <Text>{date.amc}</Text>
                    </Row>

                  </Col>
                </Grid>
                </View>
                
              </View>
               )}
}
)}
            </View>
          </DataTable>

    {/* -----------------------------------view page----------------------------- */}

          <View>{
            show ? (

              <DataTable>
            <View>
              {data.map((date) => {
                if (date.recentRateId===35){
                return (
                  <View>
           <View style={styles.container}>
              <View style={{ flex: 1 }}>
                <Grid>
                  <Col size={45}>
                    <Row style={styles.cell}>
                      <Text style={styles.colors}>Fuelsurcharge</Text>
                    </Row>

                    <Row style={styles.cell1}>
                      <Text>{date.fuelsurcharge}</Text>
                    </Row>

                  </Col>
                  <Col size={30}>
                    <Row style={styles.cell}>
                      <Text style={styles.colors}>Discount</Text>
                    </Row>
                    <Row style={styles.cell1}>
                      <Text>{date.discount}</Text>
                    </Row>

                  </Col>
                  <Col size={30}>
                    <Row style={styles.cell}>
                      <Text style={styles.colors}>Amc</Text>
                    </Row>
                    <Row style={styles.cell1}>
                      <Text>{date.amc}</Text>
                    </Row>

                  </Col>

                  <Col size={25}>
                    <Row style={styles.cell}>
                      <Text style={styles.colors}>Ca Charge</Text>
                    </Row>
                    <Row style={styles.cell1}>
                      <Text>{date.caCharge}</Text>
                    </Row>

                  </Col>

                  <Col size={25}>
                    <Row style={styles.cell}>
                      <Text style={styles.colors}>Gross Charge</Text>
                    </Row>
                    <Row style={styles.cell1}>
                      <Text>136.01</Text>
                    </Row>

                  </Col>
                </Grid>
              </View>
            </View>
            </View>
                )}})}
                </View>
              </DataTable>
            ) : null}
          </View>

{/* ---------------------------------------fedex ec------------------------------------------ */}

<View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
            <Image source={require('../../Components/assets/Fedexeconomy.png')} />
            <TouchableOpacity style={{ backgroundColor: '#ccc', paddingLeft: 20, paddingRight: 20, padding: 10, borderRadius: 5, marginBottom: 30, marginTop: 30 }} onPress={() => setShow1(!show1)}>
              <Text style={{ fontSize: 16, }}>View</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.color}>AR</Text>
          <DataTable >
            <View>
              {data.map((date) => {
                if (date.recentRateId===36){
                return (
                  <View>
            <View style={styles.container}>
              <View style={{ flex: 1 }}>
                <Grid>
                  <Col size={25}>
                    <Row style={styles.cell}>
                      <Text style={styles.colors}>Fuelsurcharge</Text>
                    </Row>

                    <Row style={styles.cell1}>
                      <Text>{date.fuelsurcharge}</Text>
                    </Row>

                  </Col>
                  <Col size={25}>
                    <Row style={styles.cell}>
                      <Text style={styles.colors}>Discount</Text>
                    </Row>
                    <Row style={styles.cell1}>
                      <Text>{date.discount}</Text>
                    </Row>

                  </Col>
                  <Col size={25}>
                    <Row style={styles.cell}>
                      <Text style={styles.colors}>Amc</Text>
                    </Row>
                    <Row style={styles.cell1}>
                      <Text>{date.amc}</Text>
                    </Row>

                  </Col>
                </Grid>
              </View>
            </View>
            </View>
                )}})}
                </View>
          </DataTable>

    {/* -----------------------------------view page----------------------------- */}

          <View>{
            show1 ? (

              <DataTable>
                 <View>
              {data.map((date) => {
                if (date.recentRateId===36){
                return (
                  <View>
           <View style={styles.container}>
              <View style={{ flex: 1 }}>
                <Grid>
                  <Col size={45}>
                    <Row style={styles.cell}>
                      <Text style={styles.colors}>Fuelsurcharge</Text>
                    </Row>

                    <Row style={styles.cell1}>
                      <Text>{date.fuelsurcharge}</Text>
                    </Row>

                  </Col>
                  <Col size={30}>
                    <Row style={styles.cell}>
                      <Text style={styles.colors}>Discount</Text>
                    </Row>
                    <Row style={styles.cell1}>
                      <Text>{date.discount}</Text>
                    </Row>

                  </Col>
                  <Col size={30}>
                    <Row style={styles.cell}>
                      <Text style={styles.colors}>Amc</Text>
                    </Row>
                    <Row style={styles.cell1}>
                      <Text>{date.amc}</Text>
                    </Row>

                  </Col>

                  <Col size={25}>
                    <Row style={styles.cell}>
                      <Text style={styles.colors}>Ca Charge</Text>
                    </Row>
                    <Row style={styles.cell1}>
                      <Text>{date.caCharge}</Text>
                    </Row>

                  </Col>

                  <Col size={25}>
                    <Row style={styles.cell}>
                      <Text style={styles.colors}>Gross Charge</Text>
                    </Row>
                    <Row style={styles.cell1}>
                      <Text>168</Text>
                    </Row>

                  </Col>
                </Grid>
              </View>
            </View>
            </View>
                )}})}
                </View>
              </DataTable>
            ) : null}
          </View>

{/* ---------------------------------------yrc------------------------------------------ */}


<View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
            <Image source={require('../../Components/assets/Yrc.png')} />
            <TouchableOpacity style={{ backgroundColor: '#ccc', paddingLeft: 20, paddingRight: 20, padding: 10, borderRadius: 5, marginBottom: 30, marginTop: 30 }} onPress={() => setShow2(!show2)}>
              <Text style={{ fontSize: 16, }}>View</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.color}>AR</Text>
          <DataTable >
            <View>
              {data.map((date) => {
                if (date.recentRateId===37){
                return (
                  <View>
            <View style={styles.container}>
              <View style={{ flex: 1 }}>
                <Grid>
                  <Col size={25}>
                    <Row style={styles.cell}>
                      <Text style={styles.colors}>Fuelsurcharge</Text>
                    </Row>

                    <Row style={styles.cell1}>
                      <Text>{date.fuelsurcharge}</Text>
                    </Row>

                  </Col>
                  <Col size={25}>
                    <Row style={styles.cell}>
                      <Text style={styles.colors}>Discount</Text>
                    </Row>
                    <Row style={styles.cell1}>
                      <Text>{date.discount}</Text>
                    </Row>

                  </Col>
                  <Col size={25}>
                    <Row style={styles.cell}>
                      <Text style={styles.colors}>Amc</Text>
                    </Row>
                    <Row style={styles.cell1}>
                      <Text>{date.amc}</Text>
                    </Row>

                  </Col>
                </Grid>
              </View>
            </View>
            </View>
                )}})}
                </View>
          </DataTable>

    {/* -----------------------------------view page----------------------------- */}

          <View>{
            show2 ? (

              <DataTable>
                 <View>
              {data.map((date) => {
                if (date.recentRateId===37){
                return (
                  <View>
           <View style={styles.container}>
              <View style={{ flex: 1 }}>
                <Grid>
                  <Col size={45}>
                    <Row style={styles.cell}>
                      <Text style={styles.colors}>Fuelsurcharge</Text>
                    </Row>

                    <Row style={styles.cell1}>
                      <Text>{date.fuelsurcharge}</Text>
                    </Row>

                  </Col>
                  <Col size={30}>
                    <Row style={styles.cell}>
                      <Text style={styles.colors}>Discount</Text>
                    </Row>
                    <Row style={styles.cell1}>
                      <Text>{date.discount}</Text>
                    </Row>

                  </Col>
                  <Col size={30}>
                    <Row style={styles.cell}>
                      <Text style={styles.colors}>Amc</Text>
                    </Row>
                    <Row style={styles.cell1}>
                      <Text>{date.amc}</Text>
                    </Row>

                  </Col>

                  <Col size={25}>
                    <Row style={styles.cell}>
                      <Text style={styles.colors}>Ca Charge</Text>
                    </Row>
                    <Row style={styles.cell1}>
                      <Text>{date.caCharge}</Text>
                    </Row>

                  </Col>

                  <Col size={25}>
                    <Row style={styles.cell}>
                      <Text style={styles.colors}>Gross Charge</Text>
                    </Row>
                    <Row style={styles.cell1}>
                      <Text>148</Text>
                    </Row>

                  </Col>
                </Grid>
              </View>
            </View>
            </View>)}})}
            </View>
              </DataTable>
            ) : null}
          </View>

{/* ---------------------------------------table redaway------------------------------------------ */}

<View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
            <Image source={require('../assets/Reddaway.png')} />
            <TouchableOpacity style={{ backgroundColor: '#ccc', paddingLeft: 20, paddingRight: 20, padding: 10, borderRadius: 5, marginBottom: 30, marginTop: 30 }} onPress={() => setShow3(!show3)}>
              <Text style={{ fontSize: 16, }}>View</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.color}>AR</Text>
          <DataTable >
          <View>
              {data.map((date) => {
                if (date.recentRateId===38){
                return (
                  <View>
            <View style={styles.container}>
              <View style={{ flex: 1 }}>
                <Grid>
                  <Col size={25}>
                    <Row style={styles.cell}>
                      <Text style={styles.colors}>Fuelsurcharge</Text>
                    </Row>

                    <Row style={styles.cell1}>
                      <Text>{date.fuelsurcharge}</Text>
                    </Row>

                  </Col>
                  <Col size={25}>
                    <Row style={styles.cell}>
                      <Text style={styles.colors}>Discount</Text>
                    </Row>
                    <Row style={styles.cell1}>
                      <Text>{date.discount}</Text>
                    </Row>

                  </Col>
                  <Col size={25}>
                    <Row style={styles.cell}>
                      <Text style={styles.colors}>Amc</Text>
                    </Row>
                    <Row style={styles.cell1}>
                      <Text>{date.amc}</Text>
                    </Row>

                  </Col>
                </Grid>
              </View>
            </View>
            </View>
                )}})}
                </View>
          </DataTable>

    {/* -----------------------------------view page----------------------------- */}

          <View>{
            show3 ? (

              <DataTable>
                 <View>
              {data.map((date) => {
                if (date.recentRateId===38){
                return (
                  <View>
           <View style={styles.container}>
              <View style={{ flex: 1 }}>
                <Grid>
                  <Col size={45}>
                    <Row style={styles.cell}>
                      <Text style={styles.colors}>Fuelsurcharge</Text>
                    </Row>

                    <Row style={styles.cell1}>
                      <Text>{date.fuelsurcharge}</Text>
                    </Row>

                  </Col>
                  <Col size={30}>
                    <Row style={styles.cell}>
                      <Text style={styles.colors}>Discount</Text>
                    </Row>
                    <Row style={styles.cell1}>
                      <Text>{date.discount}</Text>
                    </Row>

                  </Col>
                  <Col size={30}>
                    <Row style={styles.cell}>
                      <Text style={styles.colors}>Amc</Text>
                    </Row>
                    <Row style={styles.cell1}>
                      <Text>{date.amc}</Text>
                    </Row>

                  </Col>

                  <Col size={25}>
                    <Row style={styles.cell}>
                      <Text style={styles.colors}>Ca Charge</Text>
                    </Row>
                    <Row style={styles.cell1}>
                      <Text>{date.caCharge}</Text>
                    </Row>

                  </Col>

                  <Col size={25}>
                    <Row style={styles.cell}>
                      <Text style={styles.colors}>Gross Charge</Text>
                    </Row>
                    <Row style={styles.cell1}>
                      <Text>178</Text>
                    </Row>

                  </Col>
                </Grid>
              </View>
            </View>
            </View>
                )}})}
                </View>
              </DataTable>
            ) : null}
          </View>





        </ScrollView>
      </View>
    </View>

  );
};

export default Getquote;

const styles = StyleSheet.create({

  maincontainer: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginBottom:60,

  },
  color: {
    marginLeft: 10,
    marginBottom: 10,
    fontSize: 16,
    fontWeight: '500'
  },

  container: {
    width: '100%',
    height: 100,
    padding: 10,
    paddingTop: 0,
    backgroundColor: '#fff',
    color: '#fff'
  },
  cell: {
    borderWidth: 1,
    borderColor: '#ddd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#134c3e',
    color: "#fff",
    

  },
  cell1: {
    backgroundColor: '#ccc',
    borderWidth: 1,
    borderColor: '#ddd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  colors: {
    color: "#fff",
  },

  scrollViewContainer: {
   // flexGrow: 1,
    //justifyContent: "space-between",
   // alignItems: "center",
    //paddingVertical: "10%",
    paddingBottom: "50%",
  },
});