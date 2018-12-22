import React, { Component } from 'react';
import Ionicons from "react-native-vector-icons/Ionicons";
import {
    Container,
    Right,
    Left,
    Icon,
    Text,
    List,
    ListItem,
    Body,
    Thumbnail,
    Fab,
    View,

} from 'native-base';

import {
    createBottomTabNavigator,
    createStackNavigator,
    createAppContainer,
} from 'react-navigation';

import OnThisDayScreen from './OnThisDayScreen';
import NoteWrittingsScreen from './NoteWrittingsScreen';
import LoveCountScreen from './LoveCountScreen';
import NotesWrittingsScreen from './NoteWrittingsScreen';

class NotesScreen extends Component {
    static navigationOptions = {
        title: 'Loves note',
        // headerStyle:{

        // },
        // headerTintColor: '#fff',
        headerTitleStyle: {
            textAlign: 'center',flex:1
        },
    }

    render() {
        return (
            <Container>
                {/* Swipeable List */
                    <List>
                        <ListItem avatar>
                            <Left>
                                <Thumbnail large source={require('../assets/images/BlackPanther.jpg')} />
                            </Left>
                            <Body>
                                <Text>Tittle</Text>
                                <Text note>Tell me what you thinking  . . . </Text>
                            </Body>
                            <Right>
                                <Text note>1/1/2019</Text>
                            </Right>
                        </ListItem>

                        <ListItem avatar>
                            <Left>
                                <Thumbnail large source={require('../assets/images/BlackPanther.jpg')} />
                            </Left>
                            <Body>
                                <Text>Tittle</Text>
                                <Text note>Tell me what you thinking  . . . </Text>
                            </Body>
                            <Right>
                                <Text note>1/1/2019</Text>
                            </Right>
                        </ListItem>
                    </List>
                }
                <View style={{ flex: 1 }}>
                    <Fab direction="up" position="bottomRight" onPress={() => this.props.navigation.navigate('NotesWrittings')}>
                        <Icon name="md-add" />
                    </Fab>
                </View>
            </Container>
        );
    }
}

const HomeStack = createStackNavigator({
    Notes: { screen: NotesScreen },
    NotesWrittings: { screen: NoteWrittingsScreen }
});

const OnThisDayStack = createStackNavigator({
    OnThisDay: { screen: OnThisDayScreen }
});

const LoveCountStack = createStackNavigator({
    LoveCount: { screen: LoveCountScreen }
});

export default createAppContainer(createBottomTabNavigator(
    {
        OnThisDay: { screen: OnThisDayStack },
        Notes: { screen: HomeStack },
        LoveCount: { screen: LoveCountStack }
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'OnThisDay') {
                    iconName = 'md-notifications'
                    //iconName = `${focused ? 'md-paper' : 'md-paper-plane'}`;
                } else if (routeName === 'Notes') {
                    iconName = 'md-paper'
                    //iconName = `ios-star${focused ? '' : '-outline'}`;
                }
                else if (routeName === 'LoveCount') {
                    iconName = 'md-pulse'
                }

                return <Ionicons name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    }
));
