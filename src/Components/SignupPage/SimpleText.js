import React, {Component} from 'react';
import {StyleSheet, View, Text, ImageBackground} from 'react-native';

export default class SimpleText extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Create Account</Text>
            </View>
        );
    }


}
const styles = StyleSheet.create({
    container: {
        flex: 1,

        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        color: 'white',
        height: 60,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: 'transparent',
        fontSize: 40
    },
});