
import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { red, orange, blue, lightPurp, pink, white } from '../utils/colors';
import { FontAwesome, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

function SubmitBtn({ onPress }) {
    return (
        <TouchableOpacity
        style={styles.iosSubmitBtn}
            onPress={onPress}>
            <Text style={styles.submitBtnText}>SUBMIT</Text>
        </TouchableOpacity>
    )
}
export default class AddEntry extends Component {
    state = {
        facebook: 0,
        instagram: 0,
        pinterest: 0
    }
    slide = (metric, value) => {
        this.setState(() => ({
            [metric]: value
        }))
    }

    submit = () => {
        const entry = this.state

        // Update Redux

        this.setState(() => ({ facebook: 0, instagram: 0, pinterest: 0 }))

        // Navigate to home

        // Save to "DB"

        // Clear local notification
    }
    render() {
        return (
            <View>
            <View style={styles.item}>
            <Text style={styles.noDataText}>👋 Share your post on social media to earn cashback!</Text>
            </View>
            <View style={styles.container}>
                <View style={[styles.iconContainer, { backgroundColor: white }]}>
                    <FontAwesome
                        name='facebook-official'
                        color={blue}
                        size={32}
                    />
                </View>
                <View style={[styles.iconContainer, { backgroundColor: white }]}>
                    <FontAwesome
                        name='instagram'
                        color={blue}
                        size={32}
                    />
                </View>
                <View style={[styles.iconContainer, { backgroundColor: white }]}>
                    <FontAwesome
                        name='pinterest'
                        color={blue}
                        size={32}
                    />
                </View>
                </View>
                <SubmitBtn onPress={this.submit} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: 20,
        flexDirection: 'row',
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
