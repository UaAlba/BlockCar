import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

class Welcome extends Component {
  render() {
    return (
      <View>
        <Text style={styles.one}> {this.props.name}</Text>
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

export default Welcome