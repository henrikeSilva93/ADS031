import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useReducer } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from './components/splashScreen';
import AuthContextProvider, { AuthContext } from './context/loginContext';
import { useContext } from 'react';
import MainNavigator from './mainNavigator';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  
  const [splash, setSplash] = useState(true);
  const context = useContext(AuthContext)
  console.log(context)
  useEffect(() => {
    setTimeout(() => setSplash(false), 3000);
  });


  return (
    <>
        <AuthContextProvider>
      {splash ? 
        <SplashScreen /> : 
        <NavigationContainer>
        <MainNavigator/> 
        </NavigationContainer>}
      
        </AuthContextProvider>
    </>
  );
}
