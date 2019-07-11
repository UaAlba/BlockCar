import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Routes from './Routes.js'

class RNARoute extends Component {
   render() {
      return (
         <Routes />
      )
   }
}
export default RNARoute
AppRegistry.registerComponent('RNARoute', () => RNARoute)