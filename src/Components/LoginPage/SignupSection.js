import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dimensions from 'Dimensions';
import {StyleSheet, View, Text, TouchableOpacity, Animated, Easing} from 'react-native';
import {Actions} from "react-native-router-flux/index";

export default class SignupSection extends Component {
    _onPress() {
        setTimeout(() => {
            Actions.SignupScreen();
        }, 500);

    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this._onPress}>
                    <Text style={styles.text}>Create Account</Text>
                </TouchableOpacity>
                <Text style={styles.text}>Forgot Password?</Text>
            </View>
        );
    }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: 65,
        width: DEVICE_WIDTH,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    text: {
        color: 'white',
        backgroundColor: 'transparent',
    },
});