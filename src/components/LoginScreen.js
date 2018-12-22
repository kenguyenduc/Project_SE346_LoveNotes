import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';



export default class LoginScreen extends Component {
  static navigationOptions = {
    title: 'abc',
    headerTitleStyle: {
      textAlign: 'center',flex:1
  },
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
        <Button title="Go to Settings" />
      </View>
    );
  }
}
