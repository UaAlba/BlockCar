import React, { Component } from 'react';
import { Text, StyleSheet, View, ScrollView,TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Welcome from './propstest';



const Home = () => {
  const goToAbout = () =>{
    Actions.about()
  }
   return (
    <ScrollView>
        <View style={styles.container}>
        <Text style={styles.font}>차량명</Text>
        <Welcome name='마바사' />
        <Text style={styles.font}>연식</Text>
        <Welcome name='마바사' />
      </View>
      <View>
      <TouchableOpacity onPress = {goToAbout}>
        <Text>조회하기</Text>
        </TouchableOpacity>   
      </View>
    </ScrollView>
   )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 20,
      backgroundColor: 'skyblue',
      alignContent: "center",
    },
    font: {
      fontSize: 20
    },
    bt: {
        marginBottom:20,
        marginLeft: 50,
        marginRight: 50,
        alignItems: "center",
        backgroundColor: 'silver',
    },
    one: {
        flex: 1,
        marginTop: 20,
        backgroundColor: 'white',
        fontSize: 20
      }
  });

export default Home