import React, {Component} from 'react';
import{
    Icon,
    Button,
    Container
} from 'native-base';
import {
    View,
    Text
} from 'react-native';

export default class OnthisdayScreen extends Component{
    static navigationOptions = {
        title: 'On this day',
        headerTitleStyle: {
            textAlign: 'center',flex:1
        },
      }
    render(){
        return(
            <Container>
                <Text>
                    hiihhihihiih
                </Text>
                <Text>
                    Onthisday
                </Text>
                <Text>
                    Onthisday
                </Text>
            </Container>
        );
    }
}
