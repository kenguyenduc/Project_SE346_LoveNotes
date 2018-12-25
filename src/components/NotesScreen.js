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
import{
    TouchableOpacity
} from 'react-native'

import { font1, font2 } from '../theme/Fonts'

import OnThisDayScreen from './OnThisDayScreen';
import NoteWrittingsScreen from './NoteWrittingsScreen';
import LoveCountScreen from './LoveCountScreen';
import ShowNotesScreen from './ShowNotesScreen';
import UserScreen from './UserScreen';

class NotesScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
        title: 'Notes',

        headerTitleStyle: {
            textAlign: 'center',
            flex: 1,
            fontFamily: font2,
            fontWeight: '300',
            color: '#ff4081',
            fontWeight: undefined,
            fontSize: 30,
        },
        headerStyle: {
            backgroundColor: 'white',
            shadowOpacity: 0,
            elevation: 0,
            borderBottomWidth: 0.7,
            borderColor: '#ff4081',
        },
        headerLeft:<Left/>,
        
        headerRight: <TouchableOpacity
        onPress={ () => navigation.navigate('Users') }
            style={{
                backgroundColor: 'transparent',
                alignSelf: 'center',
                marginRight: 18,
                shadowColor: 0,
                elevation: 0,
            }}>
            <Icon name="md-person" style={{ color: '#ff4081' }} />
        </TouchableOpacity>
        }
    };
    
    _increaseCount = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <Container>
                {/* Swipeable List */
                    <List>
                        <ListItem avatar onPress={() => this.props.navigation.navigate('ShowNotes')}>
                            <Left>
                                <Thumbnail large square source={require('../assets/images/seflfy.png')} />
                            </Left>
                            <Body>
                                <Text style={{ fontFamily: font1, fontSize:18}}>Title</Text>
                                <Text note style={{ fontFamily: font1 }}>Tell me what you thinking  . . . </Text>
                            </Body>
                            <Right>
                                <Text note style={{ fontFamily: font1, fontSize:15 }}>Jan 1, 2019</Text>
                            </Right>
                        </ListItem>

                        <ListItem avatar onPress={() => this.props.navigation.navigate('ShowNotes')}>
                            <Left>
                                <Thumbnail large square source={require('../assets/images/travel2.jpg')} />
                            </Left>
                            <Body>
                                <Text style={{ fontFamily: font1, fontSize:18 }}> Title</Text>
                                <Text note style={{ fontFamily: font1 }}> Tell me what you thinking  . . . </Text>
                            </Body>
                            <Right>
                                <Text note style={{ fontFamily: font1, fontSize:15 }}> Jan 1, 2019</Text>
                            </Right>
                        </ListItem>
                    </List>
                }
                <View style={{ flex: 1 }}>
                    <Fab direction="up"
                        position="bottomRight"
                        onPress={() => this.props.navigation.navigate('NotesWrittings')}
                        style={{ backgroundColor: '#ff4081' }}>
                        <Icon name="md-add" />
                    </Fab>
                </View>
            </Container>
        );
    }
}

const HomeStack = createStackNavigator({
    Notes: { screen: NotesScreen },
    NotesWrittings: { screen: NoteWrittingsScreen },
    ShowNotes: { screen: ShowNotesScreen},
    Users: { screen: UserScreen}
});

const OnThisDayStack = createStackNavigator({
    OnThisDay: { screen: OnThisDayScreen},
    ShowNotes: { screen: ShowNotesScreen }
});

const LoveCountStack = createStackNavigator({
    LoveCount: { screen: LoveCountScreen }
});

HomeStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
      tabBarVisible = false;
    }
  
    return {
      tabBarVisible,
    };
};
OnThisDayStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
      tabBarVisible = false;
    }
  
    return {
      tabBarVisible,
    };
};
export default createAppContainer(createBottomTabNavigator(
    {
        OnThisDay: { screen: OnThisDayStack },
        Notes: { screen: HomeStack},
        LoveCount: { screen: LoveCountStack },
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

            //theme 1
            activeTintColor: '#ff4081',
            inactiveTintColor: 'grey',
            shadowOpacity: 0,
            elevation: 0,
            style: {
                borderColor: '#ff4081',
                borderTopWidth: 0.5,
            },
            labelStyle:{
                fontFamily:font1,
                fontSize:13,
            },
            

            // //theme 2
            // activeTintColor: 'white',
            // inactiveTintColor: 'rgba(0, 0, 0, 0.1)',
            // shadowOpacity: 0,
            // elevation: 0,

            // style:{
            //     backgroundColor:'#ff4081',
            //     borderColor: '#ff4081',
            // },
        },
    },
    
));