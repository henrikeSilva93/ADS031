import { StatusBar } from 'expo-status-bar';
import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from './components/splashScreen';
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {
  const Stack = createNativeStackNavigator();
  const [splash, setSplash] = useState(true); 
  useEffect(()=>{
   setTimeout(()=>setSplash(false),3000);
  });

  const HeaderOptions  = {
    headerStyle:{
      backgroundColor:'#F7C302'
    },
    headerTitleAlign:'center',
    headerTitleStyle:{fontWeight:'bold'}
  }

  return (
      <>
      {splash ? <SplashScreen/> 
      : 
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="21worker" component={Home} options={HeaderOptions} />
      </Stack.Navigator>
    </NavigationContainer>
        }
    </>
  );
}


