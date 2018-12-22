/** @format */

import { AppRegistry } from 'react-native';
//import App from './App';
import { name as appName } from './app.json';

//Components
import NotesScreen from './src/components/NotesScreen';
import LoginScreen from './src/components/LoginScreen';
import OnThisDayScreen from './src/components/OnThisDayScreen';
import SplashScreenScreen from './src/components/SplashScreen';
import NoteWrittingsScreen from './src/components/NoteWrittingsScreen';


AppRegistry.registerComponent(appName, () => NotesScreen);
