import * as React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Appbar, Button, Card, Paragraph,List } from 'react-native-paper';
import { ScrollView } from 'react-native';
import { Animated } from 'react-native';
import { useRef, useState } from 'react';
import { StatusBar } from 'expo-status-bar';

export default function Firstpage ({navigation}) {

    return (
        <View style={styles.container}>
  
      <Appbar.Header style={{ backgroundColor: 'white',justifyContent:'space-between' }}>
       
        <Appbar.Action icon="keyboard-backspace" size={30} color={'#134c3e'} onPress={()=>navigation.navigate('Firstpage')} style={{ marginLeft: 10 }} />
      </Appbar.Header>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
            <ScrollView>
            <View >
            <View style={{ flex: 1, margin: 15 }}>
                <TouchableOpacity  onPress={()=>navigation.navigate('SecondRegester')}>
                <Card style={{alignItems:'center',borderRadius:10,padding:20}} >
                    <Card.Cover style={styles.cardImgalin} source={require('../../assets/ltl.png')} />
                     <Text style={{fontSize:16,textAlign:'center',color:'#a4745b',marginBottom:10}}  onPress={()=>navigation.navigate('SecondRegester')} >LTL Quote</Text>
                     <Paragraph style={{fontSize:13,textAlign:'left'}} >Get a rate quote for LTL(Less than truck load).you can create a Bill of Lading at a point  from the information used in this rate quote request(only LTL).</Paragraph>
                </Card> 
                </TouchableOpacity>  
            </View>
            <View style={{ flex: 1, margin: 15 }}>
                <Card style={{alignItems:'center',borderRadius:10,padding:20}} >
                    <Card.Cover style={styles.cardImgalin} source={require('../../assets/others.png')} />
                     <Text style={{fontSize:16,textAlign:'center',color:'#a4745b',marginBottom:10}}>Other Quote</Text>
                     <Paragraph style={{fontSize:13,textAlign:'left'}}>Get a quote for anything other than LTL.You will have the choice between a "Quickie Quote" or a "Full Quote".A "Quickie Quote" isif you just want to get a quote and don't really need to book a shipment at this (you do have the option to)A "Full Quote" has all of the information required to get a full quote and to book a shipment.(Transportation Types:Truckload,Volume,Air,Ocean).</Paragraph>
                </Card>   
            </View>
           
            </View>

            </ScrollView>
           
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
 
    cardImgalin: {
        height: 70,
        width: 70,
        resizeMode: 'contain',
        marginLeft:('35%'),
        margin:5
       
        
    }
});