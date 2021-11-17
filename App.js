import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from './components/splashScreen';
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaLogin from './screens/TelaLogin';
import TelaCadastro from './screens/TelaCadastro';
import Detalhes from './screens/details';
import FilterServices from './screens/filterServices';
import CadastrarServices from './screens/CadastrarServives';

export default function App() {
  const Stack = createNativeStackNavigator();
  const [splash, setSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => setSplash(false), 3000);
  });

  const HeaderOptions = {
    headerStyle: {
      backgroundColor: '#F7C302',
    },
    headerTitleAlign: 'center',
    headerTitleStyle: { fontWeight: 'bold' },
  };

  return (
    <>
    
      {splash ? (
        <SplashScreen />
      ) : (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Login"
              component={TelaLogin}
              options={HeaderOptions}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={HeaderOptions}
            />
            <Stack.Screen
              name="Cadastro"
              component={TelaCadastro}
              options={HeaderOptions}
            />
            <Stack.Screen
              name="detalhes"
              component={Detalhes}
              options={HeaderOptions}
            />
              <Stack.Screen
              name="filterServices"
              component={FilterServices}
              options={HeaderOptions}
            />
               <Stack.Screen
              name="CadastrarServices"
              component={CadastrarServices}
              options={HeaderOptions}
            />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </>
  );
}
