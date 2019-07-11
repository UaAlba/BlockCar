import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Page01 from './Page01.js'
import Page02 from './Page02.js'

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "page01" component = {Page01} title = "Page01" initial = {true} />
         <Scene key = "page02" component = {Page02} title = "Page02" />
      </Scene>
   </Router>
)
export default Routes