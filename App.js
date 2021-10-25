import React, { useState } from "react";
import {  View, StyleSheet, Text } from 'react-native';

export default function TelaCadastrarServices({ navigation }) {

  const [selectedValue, setSelectedValue] = useState("");  
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
              name="21Worker"
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
>>>>>>> main
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 45,
  }
});
