import React, { Component } from 'react';
import {Image} from 'react-native';
import {styles} from '../stylesheet/style.js';

export class HelloWorld extends Component {
  render() {
    let pic = {
      uri: "https://i.imgur.com/kqOTobP.png"
    }

    return (
      <Image source={pic} style={styles.image}/>
    );
  };
};
