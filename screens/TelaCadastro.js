import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Image,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Dropdown, GroupDropdown, MultiselectDropdown,} from 'sharingan-rn-modal-dropdown';

export default function TelaCadastro({ navigation }) {
  const [valueSS, setValueSS] = useState('');
  const onChangeSS = (value: string[]) => {setValueSS(value);};
  const data = [ 
    { 
      value: '1', 
      label: 'Prestador de serviços',
    },
    {
      value: '2',
      label: 'Contratante',
    },
  ];
  return (
    <View style={styles.container}>
      <Text> E-mail </Text>
      <TextInput
        keyboardType="email-address"
        autoCapitalize={'none'}
        style={styles.field}
      />
      <Text> Senha </Text>
      <TextInput
        keyboardType="number-pad"
        secureTextEntry={true}
        style={styles.field}
      />
      <Text> Repita a Senha </Text>
      <TextInput
        keyboardType="number-pad"
        secureTextEntry={true}
        style={styles.field}
      />
      <View style={styles.fixToText}>
        <Button
          title="Fazer Login"
          onPress={() => navigation.navigate('lista')}
          color="#F7C302"
        />
      </View>
      <View style={styles.container2}>
        <Dropdown
          label="Tipo de conta"
          data={data}
          value={valueSS}
          onChange={onChangeSS}
          required="yes"
          rippleColor="black"
          
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
  container2: {
    paddingTop: 30,
    marginLeft: 20,
    marginRight: 20,
    paddingLeft: 150,
    flex: 1,
  },
});
