import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import { Icon } from 'react-native-elements'

const Detalhes = ({navitagion, route}) => {
    const {titulo,especialidade,localidade,orcamento} = route.params;
  return (
    <View style={styles.container}>
        <Text style={styles.title}>{titulo}</Text>
        <Text style={{fontSize:18, marginLeft:150}}>{especialidade}</Text>
        <View style={{flex:1, flexDirection:'row',justifyContent:'space-around', marginTop:40}}>
          <Text style={{fontSize:20, color:'#008000', fontWeight:'bold'}}>{orcamento}</Text>
          <Text style={{fontSize:20, fontWeight:'bold'}}>{localidade}</Text>
        </View>
        <View style={{padding:20, marginTop:60}}> 
        <Text>
          Procuro alguém para construção de um muro de x metros por x metros em um terreno.
        </Text>

        </View>
        <View style={{marginTop:50}}>
        <Image
          style={styles.image}
          source={require('../assets/construcao.png')}
        />
        
        </View>
        <View style={styles.contato}>
          
        <Text style={{fontSize:20, marginTop:30}}>Contato do cliente</Text>
        <View style={{flexDirection:'row'}}>
        <Icon
            name='whatsapp'
            type='font-awesome-5'
            size="100"
            style={{marginTop:3, marginRight:3}}/>
             <Text>(61) 0000-0000</Text>
        </View>
        <View style={{flexDirection:'row'}}>
        <Icon
            name='envelope'
            type='font-awesome-5'
            size="20"
            style={{marginTop:3, marginRight:3}}
            />
           <Text>aquilahenrique.silva@gmail.com</Text>
        </View>
        </View>

    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
         width:360,
        height:500
      },
      title:{
        fontSize:30,
        fontWeight:'bold',
        marginTop:20,
        marginLeft:110
      },
      image:{
        width:360,
        height:150
      },
      contato:{
        marginBottom:500,
        marginLeft:20
      }
});

export default Detalhes;
