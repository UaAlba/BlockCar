import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json


class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor : 'white' }}>
        <Text style = {{fontSize : 20, marginBottom : 30}}>메인화면</Text>
        <Button
          title = "차량 등록"
          color = '#8a2be2'
          onPress={() => this.props.navigation.navigate('Details')}
        />

        <Button
          title = '차량 조회'
          color = '#8a2be2'
          onPress = {() => this.props.navigation.navigate('Search')}
          />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', backgroundColor : 'white' }}>
        <Text style = {{fontSize : 20, marginBottom : 30, marginTop : 15}}>차량 등록</Text>

        <Button
          color = '#8a2be2'
          title="확인"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          color = '#8a2be2'
          title="취소"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

class SearchScreen extends React.Component {
  render () {
    return (
      <View style = {styles.container}>
      <View style = {{flex : 1, alignItems : 'center'}}>
        <Text style = {{fontSize : 20, marginBottom : 30, marginTop : 15}}>차량 조회</Text>
        <View stlye = {styles.content}>
        <Button
          color = '#8a2be2'
          title="확인"
          onPress={() => this.props.navigation.navigate('Home')}
        />

        <Button
          color = '#8a2be2'
          title="취소"
          onPress={() => this.props.navigation.goBack()}
        />
        </View>
      </View>
      </View>
    )
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

    Search : {
      screen : SearchScreen
    },
  },
  {
    initialRouteName: 'Home',
  }
);

const styles = StyleSheet.create({
  container : {
    flex : 1,
    alignItems : 'center',
    backgroundColor : 'lightpink'
  },

  content : {
    alignItems : 'center',
    marginBottom : 30
  }

});

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}