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

export default class LoveCountScreen extends Component{
    static navigationOptions = {
        title: 'How far ?',
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
                    Love Count
                </Text>
                <Text>
                    Love Count
                </Text>
            </Container>
        );
    }
}
