import React, { useState } from 'react';
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

export default function TelaCadastro({ navigation }) {
  const [isSelected, setSelection] = useState(false);
  const [isSelected2, setSelection2] = useState(false);
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
          title="Fazer Login"
          onPress={() => navigation.navigate('Home')}
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
});