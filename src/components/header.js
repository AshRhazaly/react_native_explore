// import necessary stuff here

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// Create your component here

const Header = (props) => {
  return(
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20
  },
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    paddingTop:40,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    position: 'relative'
  }

});

export default Header;
