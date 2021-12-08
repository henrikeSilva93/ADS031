import * as React from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  Image,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import firebase from '../config/firebase';
import { AuthContext } from '../context/loginContext';

export default function TelaLogin({ navigation }) {
  const [email, setEmail] = React.useState('')
  const [senha, setSenha] = React.useState('')
  const [erro, setErro] = React.useState(false)
  const[mensagemErro, setMensagemErro] = React.useState("erro")
  const {loged, setLoged} = React.useContext(AuthContext)
  const handleLogin = () => {

    if(email === "" || senha === ""){
      setErro(true)
      setMensagemErro("os campos não podem ser vazios")
      setTimeout(() => {
        setErro(false)
      }, 7000);
    }else {
   
    firebase.auth().signInWithEmailAndPassword(email, senha)
  .then((userCredential) => {
    
    var user = userCredential.user;
   if(loged === false){
     setLoged(true)
     navigation.navigate('Home',{user})
   }

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
  return (
    
    <View style={styles.container}>
      {erro && <Text style={styles.erro}>{mensagemErro}</Text>}
      <Text> E-mail </Text>
      <TextInput
        keyboardType="email-address"
        autoCapitalize={'none'}
        style={styles.field}
        value={email}
        onChangeText={(text)=>setEmail(text)}
      />
      <Text> Senha </Text>
      <TextInput
        secureTextEntry={true}
        style={styles.field}
        value={senha}
        onChangeText={(text)=>setSenha(text)}
      />
      <View style={styles.fixToText}>
        <Button
          title="Cadastro"
          onPress={() => navigation.navigate('TelaCadastro')}
          color="#F7C302"
        />
        <Button
          title="Entrar"
          onPress={() => handleLogin()}
          color="#F7C302"
        />
      </View>
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
  erro:{
    backgroundColor:'#F70A0A',
    padding:20,
    marginTop:50,
    textAlign:'center'
  }
});
