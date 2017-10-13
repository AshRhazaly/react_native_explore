/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import Header from './src/components/header';


export default class iOStest extends Component {
  render() {
    return (
      <Header headerText={'Albums'}/>
    );
  }
}


AppRegistry.registerComponent('iOStest', () => iOStest);
