import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from './components/splashScreen';
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaLogin from './screens/TelaLogin';
import TelaCadastro from './screens/TelaCadastro';

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
              name="Faça o Login"
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
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </>
  );
}