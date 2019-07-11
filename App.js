import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json


class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.box}>Test</Text>
        <Button
          title="조회하기"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('MoreDetails')}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

class MoreDetailsScreen extends React.Component {
   render() {
     return (
       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         <Text>Details Screen~~~</Text>
         <Button
           title="Go to Details... again"
           onPress={() => this.props.navigation.navigate('Details')}
         />
         <Button
           title="Go to Home"
           onPress={() => this.props.navigation.navigate('Home')}
         />
         <Button
           title="Go back"
           onPress={() => this.props.navigation.goBack()}
         />
       </View>
     );
   }
 }

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
    MoreDetails: {
       screen: MoreDetailsScreen,
    }
  },
  {
    initialRouteName: 'Home',
  }
);

const styles = StyleSheet.create({
   container: {
     flex: 1,
     marginTop: 20,
     backgroundColor: 'skyblue',
   },
   font: {
     fontSize: 20
   },
   box: {
   backgroundColor: "white",
   fontSize: 20
   }
 });
 

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}