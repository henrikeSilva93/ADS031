import React, { useEffect } from 'react';
import { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet} from 'react-native';
import Card  from '../../components/card';


const Home = ({navigation}) => {
  const [UserRole, setUserRole] = useState('prestador');
  return (
    <>
  <Card
  titulo='muro 5mts'
  especialidade='pedreiro'
  orcamento="R$ 120"
  localidade="Brasília - DF"
  />
   
 {
   UserRole == 'cliente'?
   <TouchableOpacity
   style={styles.filterButton}
   onPress={()=> navigation.navigate('CadastrarServices')}>
  <Text>+</Text>
   </TouchableOpacity>
   :
   <TouchableOpacity
   style={styles.filterButton}
   onPress={()=> navigation.navigate('filterServices')}>
     <Text>F</Text>
   </TouchableOpacity>
 }
  </>
  );
};

const styles = StyleSheet.create({
  filterButton:{
    width:70,
    height:70,
    borderRadius:50,
    marginLeft: 280,
    marginBottom:10,
    backgroundColor:'#F7C302',
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
  }
})

export default Home;

