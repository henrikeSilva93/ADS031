import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


const Card = () => {
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
          <Text style={styles.headerTitle}>Muro 3 mts</Text>
          <Text style={styles.headerLead}>pedreiro</Text>
        </View>
        <View style={styles.cardBody}>
          <Text style={{fontSize:21, color:'#008000',fontWeight: 'bold'}}>R$ 1000</Text>
          <Text style={{fontSize:21, fontWeight: 'bold'}}>Brasília - DF</Text>
        </View>
        <View>
            <TouchableOpacity
            style={styles.btn}
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
      height:420,
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
      marginTop:55,
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
      marginTop:55
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