import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import AddEntry from './components/AddEntry';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import EntryDetail from './components/EntryDetail';
import LoginScreen from './components/LoginScreen';
import History from './components/History';
import { purple, white } from './utils/colors'



export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <LoginScreen />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
