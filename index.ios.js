/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
var Main = require('./App/Components/main');
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  NavigatorIOS,
  View
} from 'react-native';

var styles= StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#111111'
  },
})

class GithubNotetaker extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'GithubNotetaker',
          component: Main
        }} />
    );
  }
};

AppRegistry.registerComponent('GithubNotetaker', () => GithubNotetaker);
