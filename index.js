/** @format */

import { AppRegistry } from 'react-native';
import { createStackNavigator } from 'react-navigation'
import App from './App';
import { name as appName } from './app.json';

//Components
import Notes from './src/components/Notes';
import Login from './src/components/Login';
import OnThisDay from './src/components/OnThisDay';
import SplashScreen from './src/components/SplashScreen';



AppRegistry.registerComponent(appName, () => App);
