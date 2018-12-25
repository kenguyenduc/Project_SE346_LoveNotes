import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
//import App from './App';
import { name as appName } from './app.json';

//Components
import NotesScreen from './src/components/NotesScreen';
import OnThisDayScreen from './src/components/OnThisDayScreen';
import SplashScreen from './src/components/SplashScreen';
import NoteWrittingsScreen from './src/components/NoteWrittingsScreen';
import ShowNotesScreen from './src/components/ShowNotesScreen';
import LoveCountScreen from './src/components/LoveCountScreen';
import UserScreen from './src/components/UserScreen';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { currentScreen: 'SplashScreen' };
        setTimeout(() => {
            this.setState({ currentScreen: 'NotesScreen' })
        }, 5000)
    }
    render() {
        const { currentScreen } = this.state;
        let mainScreen = currentScreen === 'SplashScreen' ? <SplashScreen /> : <NotesScreen />
        return mainScreen
    }
}

AppRegistry.registerComponent(appName, () => Main);
