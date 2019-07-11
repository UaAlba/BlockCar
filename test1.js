import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

class test1 extends Component {
  render() {
    return (
      <View>
        <Welcome style={styles.one} name = '테스트입니다'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    one: {
      flex: 1,
      marginTop: 20,
      backgroundColor: 'white',
      fontSize: 20
    },
  });

export default test1