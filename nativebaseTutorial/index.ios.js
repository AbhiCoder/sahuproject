/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import App from './app';
export default App;

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {Container, Content} from 'native-base';


class nativebaseTutorial extends Component {
  render() {
    return (
        <Container>
                <Content>
                </Content>
            </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('nativebaseTutorial', () => nativebaseTutorial);
