import React, { Component } from 'react';
import { AppRegistry, TextInput } from 'react-native';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { red, orange, blue, lightPurp, pink, white } from '../utils/colors';

function SubmitBtn({ onPress }) {
    return (
        <TouchableOpacity
        style={styles.iosSubmitBtn}
            onPress={onPress}>
            <Text style={styles.submitBtnText}>SUBMIT</Text>
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

    submit = () => {
        
        const entry = this.state
        return fetch(`https://visa-engage.appspot.com/validateUser?userId=${this.state.username}&password=${this.state.password}`)
        .then((responseJson) => {
            debugger;
            console.log(responseJson);
    
          })
        .catch((error) =>{
          console.error(error);
        });

    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={{ height: 80, width: 200, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(username) => this.setState({ username })}
                    value={this.state.username}
                    autoCapitalize = 'none'
                />
                <TextInput
                    style={{ height: 80, width: 200,borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password}
                    autoCapitalize = 'none'
                />
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
        padding: 20,
        backgroundColor: white
    },
    iosSubmitBtn: {
        backgroundColor: blue,
        padding: 10,
        borderRadius: 7,
        height: 45,
        marginLeft: 40,
        marginRight: 40,
    },
    iconContainer: {
        padding: 5,
        borderRadius: 8,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20
    },
    submitBtnText: {
        color: white,
        fontSize: 22,
        textAlign: 'center',
      },
    noDataText: {
        fontSize: 20,
            paddingTop: 20,
            paddingBottom: 20
          },
          item: {
            backgroundColor: white,
            borderRadius: 16,
            padding: 20,
            marginLeft: 10,
            marginRight: 10,
            marginTop: 17,
            justifyContent: 'center',
            shadowRadius: 3,
            shadowOpacity: 0.8,
            shadowColor: 'rgba(0, 0, 0, 0.24)',
            shadowOffset: {
              width: 0,
              height: 3
            },
          }
})
