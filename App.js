import React, { useState, useEffect } from 'react-native';
import { getNotificationInbox } from 'native-notify';

import registerNNPushToken from 'native-notify';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import Mylogin from './Components/screens/Mylogin';

import Getquote from './Components/screens/Getquote';
import Regester from './Components/screens/Regester';
import Firstpage from './Components/screens/Firstpage';
import Secandpage from './Components/screens/Secandpage';
import SecondRegester from './Components/screens/SecondRegester';
import Notificationinbox from './Components/screens/Notificationinbox';




// const Deawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  registerNNPushToken(6289, 'ZwebBACUEUS05dfL9QSR8G');
  return ( 
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Mylogin" screenOptions={{headerShown: false}} >
      <Stack.Screen name='Mylogin' component={Mylogin} />
      <Stack.Screen name='Regester' component={Regester} />
      <Stack.Screen name='Getquote' component={Getquote} />
      <Stack.Screen name='Firstpage' component={Firstpage} />
      <Stack.Screen name='Secandpage' component={Secandpage} />
      <Stack.Screen name='SecondRegester' component={SecondRegester} />
      <Stack.Screen name='Notificationinbox' component={Notificationinbox} />
      
      
      
      </Stack.Navigator>

    </NavigationContainer>
  );
}

// screenOptions={{headerShown: false}}

