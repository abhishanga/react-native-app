import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import AddEntry from './components/AddEntry';
import {
  createStackNavigator,
} from 'react-navigation';
import EntryDetail from './components/EntryDetail';
import LoginScreen from './components/LoginScreen';
import SocialMediaFeed from './components/SocialMediaFeed';
import History from './components/History';
import { purple, white } from './utils/colors'

const RootStack = createStackNavigator(
  {
    Home: LoginScreen,
    Profile: SocialMediaFeed,
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}



