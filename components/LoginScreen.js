import React, { Component } from 'react';
import { AppRegistry, TextInput } from 'react-native';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { red, orange, blue, lightPurp, pink, white } from '../utils/colors';

function SubmitBtn({ onPress }) {
    return (
        <TouchableOpacity
            style={styles.iosSubmitBtn}
            onPress={onPress}>
            <Text style={styles.submitBtnText}>Login</Text>
        </TouchableOpacity>
    )
}

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    static navigationOptions = {
        title: 'Welcome',
    };

    submit = () => {

        const entry = this.state
        return fetch(`https://visa-engage.appspot.com/validateUser?userId=${this.state.username}&password=${this.state.password}`)
            .then((responseJson) => {
                if (responseJson.status === 200) {
                    this.props.navigation.navigate('Profile', { username: this.state.username })
                }

            })
            .catch((error) => {
                console.error(error);
            });

    }

    render() {
        return (
            <View style={styles.container}>
            <View style={styles.logoContainer}>
            <Image 
              style={styles.logo}
              source={require('../assets/visa-logo.png')}
              />
              <Text style={styles.title}>An app that helps your earn cashback</Text>
            </View>
            <View style={styles.formContainer}>
                <TextInput
                    style={{ height: 40,paddingHorizontal:10,marginBottom: 20,backgroundColor: 'rgba(255,255,255,0.7)',width: 200, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(username) => this.setState({ username })}
                    value={this.state.username}
                    placeholder="username or email"
                    autoCapitalize='none'
                />
                <TextInput
                    style={{ height: 40, width:'100%',paddingHorizontal:10,marginBottom: 20,backgroundColor: 'rgba(255,255,255,0.7)',width: 200, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password}
                    secureTextEntry
                    placeholder="password"
                    autoCapitalize='none'
                />
            </View>
                <SubmitBtn onPress={this.submit} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: 20,
        flexDirection: 'column',
        backgroundColor: white
    },
    logo: {
        width: 200,
        height: 100
      },
    title: {
        marginTop: 10,
        width: 160,
        textAlign: 'center',
        opacity: 0.9
    },
    iosSubmitBtn: {
        backgroundColor: blue,
        paddingVertical: 10,
        marginBottom: 10,
        padding: 10,
        borderRadius: 7,
        height: 45,
        marginLeft: 40,
        marginRight: 40,
    },
    submitBtnText: {
        color: white,
        fontSize: 22,
        textAlign: 'center',
    },
    formContainer:{
        flex: 1,
        top: 20,
        padding: 10,
        flexDirection: 'column'
    },
   logoContainer: {
       alignItems: 'center',
       flexGrow: 1,
       justifyContent: 'center'
   }
})
