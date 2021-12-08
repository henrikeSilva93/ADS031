import React, { useContext, useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  Image,
  CheckBox,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { set } from 'react-native-reanimated';
import firebase from '../config/firebase'
import { AuthContext } from '../context/loginContext';

export default function TelaCadastro({ navigation }) {

  const [isSelected, setSelection] = useState(false);
  const [isSelected2, setSelection2] = useState(false);
  const [email, setEmail] = useState("");
  const[senha, setSenha] = useState("");
  const [erro, setErro] = useState(false)
  const[mensagemErro, setMensagemErro] = useState("erro")
  const {loged, setLoged} = useContext(AuthContext)
  
  
    
  
  const cadastrarUsuario =() => {
    if(email === "" || senha === ""){
      setErro(true)
      setMensagemErro("os campos não podem ser vazios")
      setTimeout(() => {
        setErro(false)
      }, 7000);
    }else {
   
    firebase.auth().createUserWithEmailAndPassword(email, senha)
  .then((userCredential) => {
    setLoged(true)
    var user = userCredential.user;
   navigation.navigate('Home',{loged:true, email: user.email})

  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    setErro(true)
    setMensagemErro(errorMessage)
    console.log("erro ao cadastrar")
    // ..
  });

    
}
  }
  useEffect(()=>{

  },
  []);

  return (
    <>
    {erro && <Text style={styles.erro}>{mensagemErro}</Text>}
   
    <View style={styles.container}>
      <Text> E-mail </Text>
      <TextInput
        keyboardType="email-address"
        autoCapitalize={'none'}
        style={styles.field}
        value={email}
        onChangeText={(text)=> setEmail(text)}
      />
      <Text> Senha </Text>
      <TextInput
        keyboardType="default"
        secureTextEntry={true}
        style={styles.field}
        value={senha}
        onChangeText={(text)=> setSenha(text)}
      />
      <Text> Repita a Senha </Text>
      <TextInput
        keyboardType="number-pad"
        secureTextEntry={true}
        style={styles.field}
      />
      <Text> Número de Telefone</Text>
      <TextInput keyboardType="phone-pad" style={styles.field} />
      <View style={styles.container3}>
        <CheckBox
          style={styles.checkbox}
          value={isSelected}
          onValueChange={setSelection}
          testID="1"
        />
        <Text style={styles.label}> Prestador de Serviços</Text>
      </View>
      <View style={styles.container3}>
        <CheckBox
          style={styles.checkbox}
          value={isSelected2}
          onValueChange={setSelection2}
          testID="2"
        />
        <Text style={styles.label}> Contratante</Text>
      </View>
      <View style={styles.fixToText}>
        <Button
          title="Cadastar"
          onPress={() => cadastrarUsuario()}
          color="#F7C302"
        />
      </View>
    </View>
    </>
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
  container3: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
    color:"#F7C302",
  },
  label: {
    margin: 8,
  },
  erro:{
    backgroundColor:'#F70A0A',
    padding:20,
    marginTop:50,
    textAlign:'center'
  }
});