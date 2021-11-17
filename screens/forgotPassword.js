import * as React from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  Image,
  TouchableOpacity,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default function forgotPassword({ navigation }) {
  
  const cadastro = () => {
alert('Um email para confirmar sua recuperação foi enviado');
}

  return (
   
    <View style={styles.container}>
      
     <Text style={{color:'black', textAlign:'left', height:130,  }} >Enviaremos um e-email com um link para a redefinição da senha  </Text>
      <Text> E-mail </Text>
      <TextInput
        keyboardType="email-address"
        autoCapitalize={'none'}
        style={styles.field}
      />
      
      <Text> Cpf </Text>
      <TextInput
        keyboardType="number-pad"
        secureTextEntry={true}
        style={styles.field}
      />
      <TouchableOpacity style={styles.btnCadastro} onPress={()=>cadastro()}>
    <Text style={{color:'black', textAlign:'center'}} > ENVIAR PARA EMAIL  </Text>
    </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 45,
  },
  field: {
    borderBottomWidth: 2,
    borderColor: '#F7C302',
    paddingBottom: 5,
    marginBottom: 10,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

   btnCadastro:{
  width:'100%',
  height:40,
  backgroundColor:'yellow',
  borderRadius:20,
  justifyContent:'center'
  }


});