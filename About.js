import React,{ Component } from 'react'
import { Text, StyleSheet, View, ScrollView,TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'
import Welcome from './propstest';




const About = () => {
  const goToHome = () =>{
    Actions.home()
  }
   return (
    <ScrollView>
    <View style={styles.container}>
    <Text style={styles.font}>모델</Text>
    <Welcome name='가나다라' />
    <Text style={styles.font}>형식년도</Text>
    <Welcome name='마바사' />
  </View>
  <View>
  <TouchableOpacity onPress = {goToHome}>
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


}
});

export default About