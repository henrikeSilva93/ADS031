import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import { useNavigation, NavigationContainer } from '@react-navigation/native';


const Card = ({titulo,especialidade,orcamento,localidade}) => {
    const navigation = useNavigation();

    return (
        
        <>
      <View style={styles.container}>
       <View style={styles.card}>
        <View style={styles.cardImg}>
        <Image
          style={styles.image}
          source={require('../assets/construcao.png')}
        />
        </View>
        <View style={styles.cardHeader}>
          <Text style={styles.headerTitle}>{titulo}</Text>
          <Text style={styles.headerLead}>{especialidade}</Text>
        </View>
        <View style={styles.cardBody}>
          <Text style={{fontSize:21, color:'#008000',fontWeight: 'bold'}}>{orcamento}</Text>
          <Text style={{fontSize:21, fontWeight: 'bold'}}>{localidade}</Text>
        </View>
        <View>
            <TouchableOpacity
            style={styles.btn}
            onPress={()=> navigation.navigate('detalhes',{titulo,especialidade,orcamento,localidade})}
            >
            <Text style={{fontSize:21, fontWeight: 'bold', marginLeft:110, marginTop:7}}>Ver mais</Text>
            </TouchableOpacity>
        </View>
       </View>
      </View>
      </>
    );
  };
  
  export default Card;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    card:{
      width:320,
      height:380,
      borderColor:'#E5E5E5',
      borderRadius: 10,
      shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    cardImg:{
      width:320,
      height:120
    },
    image:{
      width:318,
      height:160
    },
    cardHeader:{
      marginTop:50,
      marginLeft:90,
    },
    headerTitle:{
      fontSize: 32,
      fontWeight: 'bold'
    },
    headerLead:{
      fontSize: 20,
      marginLeft:44
    },
    cardBody:{
      flex:1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop:40
    },
    btn:{
        backgroundColor: '#F7C302',
        width:280,
        height:40,
        marginLeft:20,
        marginBottom:18,
        borderRadius:4
    }
  
  });