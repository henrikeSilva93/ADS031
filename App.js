import { StatusBar } from 'expo-status-bar';
import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from './components/splashScreen';

export default function App() {
  const [splash, setSplash] = useState(true); 
  useEffect(()=>{
   setInterval(()=>setSplash(false),3000);
  });
  return (
      <>
      {splash ? <SplashScreen/> : 
      <View style={styles.container}>
        <Text>Esta é a home!!</Text>
        
        </View>
        }
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },
});
