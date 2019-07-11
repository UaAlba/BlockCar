import React, { Component } from 'react'
import { Router, Scene } from 'react-native-router-flux';

import Home from './Home.js';
import About from './About.js';

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "home" component = {Home} title = "매매시스템-원부 정보 입력 및 조회" initial = {true} />
         <Scene key = "about" component = {About} title = "매매시스템-성능점검 및 평가정보 입력 및 조회" />
      </Scene>
   </Router>
   )

export default Routes
