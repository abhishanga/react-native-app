import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from "react-native";
import { Icon } from 'native-base'

class AccountSettingsTab extends Component {
  static navigationOptions = {

    tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-person" style={{ color: tintColor }}  />
    )
}

render() {
    return (
        <View style={styles.container}>
            <Text>AccountSettingsTab</Text>
        </View>
    );
}
}
export default AccountSettingsTab;

const styles = StyleSheet.create({
container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
}
});