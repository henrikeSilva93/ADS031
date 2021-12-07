import React, { useContext } from "react";
import Home from './screens/Home';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaLogin from './screens/TelaLogin';
import TelaCadastro from './screens/TelaCadastro';
import Detalhes from './screens/details';
import FilterServices from './screens/filterServices';
import CadastrarServices from './screens/CadastrarServives';
import forgotPassword from './screens/forgotPassword';
import { AuthContext } from "./context/loginContext";
export default function MainNavigator(){
    const HeaderOptions = {
        headerStyle: {
          backgroundColor: '#F7C302',
        },
        headerTitleAlign: 'center',
        headerTitleStyle: { fontWeight: 'bold' },
      };

    const Stack = createNativeStackNavigator();
      const context = useContext(AuthContext)
      return(

       
          <Stack.Navigator>
            { context.loged === false ? (
              <>
            <Stack.Screen
              name="Login"
              component={TelaLogin}
              options={HeaderOptions}
            />
            </>
            ):
            (
              <>
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
               <Stack.Screen
              name="forgotPassoword"
              component={forgotPassword}
              options={HeaderOptions}
            />
            </>
            )}
          </Stack.Navigator>
          
       
      );
}