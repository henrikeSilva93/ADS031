import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const SplashScreen = () =>{
    return(
        <View style={styles.container}>
            <Text style={styles.text}>21Worker</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#F7C302'
    },
    text:{
        fontSize: 70,
        fontWeight:'bold'
    }
})

export default SplashScreen;