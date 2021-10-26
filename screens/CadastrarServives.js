import React, { useState } from "react";
import {  View, Picker, StyleSheet, Text, TextInput, Button,} from 'react-native';

export default function CadastrarServices({ navigation }) {

  const [selectedValue, setSelectedValue] = useState("");  
  return (
    <View style={styles.container}>
       <Text> Titulo</Text>
       <TextInput
        autoCapitalize={'none'}
        style={styles.field}
      />
       <Text> Endereço </Text>
       <TextInput
        autoCapitalize={'none'}
        style={styles.field}  
      />
       <Text> Descrição</Text>
       <TextInput
        autoCapitalize={'none'}
        style={styles.field}
      />
       <Text> Orçamento (R$) </Text>
       <TextInput
        autoCapitalize={'none'}
        style={styles.field}
      />
      <View style={{flexDirection:"row"}}>
          <Text> De</Text>
          <TextInput style={styles.field2} />
          <Text> Ate</Text>
          <TextInput style={styles.field2} />
      </View>
      <Text> Modalidade</Text>
      <Picker
        selectedValue={selectedValue}
        style={styles.field}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Selecione" value="" />
        <Picker.Item label="Eletricista" value="eletricista" />
        <Picker.Item label="Hidraulico" value="hidraulico" />
        <Picker.Item label="Pedreiro" value="pedreiro" />
        <Picker.Item label="Marceneiro" value="marceneiro" />
      </Picker>
      <View style={styles.fixToText}>
        <Button
          title="Cadastrar Serviços"
          onPress={() => navigation.navigate('Cadastro')}
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
   field2: {
    borderBottomWidth: 2,
    borderColor: '#F7C302',
    marginBottom: 10,
    width: 95,
    
  }, 
});