import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Detalhes = ({navitagion, route}) => {
    const {titulo} = route.params;
  return (
    <View style={styles.container}>
        <Text>{titulo}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
});

export default Detalhes;
