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

export default function TelaLogin({ navigation }) {
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
      <View style={styles.fixToText}>
        <Button
          title="Cadastro"
          onPress={() => navigation.navigate('Cadastro')}
          color="#F7C302"
        />
        <Button
          title="Entrar"
          onPress={() => navigation.navigate('lista')}
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
});
