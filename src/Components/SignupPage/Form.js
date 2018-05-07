import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dimensions from 'Dimensions';
import {
    StyleSheet,
    KeyboardAvoidingView,
    View,
    ActivityIndicator,
    TouchableOpacity,
    ImageBackground,
} from 'react-native';

import UserInput from './UserInputSignupPage';


import usernameImg from '../LoginPage/username.png';
import passwordImg from '../LoginPage/password.png';
import eyeImg from '../LoginPage/eye_black.png';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPass: true,
            press: false,
        };
        this.showPass = this.showPass.bind(this);
    }

    showPass() {
        this.state.press === false
            ? this.setState({showPass: false, press: true})
            : this.setState({showPass: true, press: false});
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>

                <UserInput
                    source={usernameImg}
                    placeholder="Username"
                    autoCapitalize={'none'}
                    returnKeyType={'done'}
                    autoCorrect={false}
                />
                <UserInput source={passwordImg}
                           secureTextEntry={this.state.showPass}
                           placeholder="Password"
                           returnKeyType={'done'}
                           autoCapitalize={'none'}
                           autoCorrect={false}
                />
                <UserInput source={eyeImg}
                           secureTextEntry={this.state.showPass}
                           placeholder="Interests"
                           returnKeyType={'done'}
                           autoCapitalize={'none'}
                           autoCorrect={false}
                />
            </KeyboardAvoidingView>
        );
    }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    btnEye: {
        position: 'absolute',
        top: 55,
        right: 28,
    },
    iconEye: {
        width: 25,
        height: 25,
        tintColor: 'rgba(0,0,0,0.2)',
    },
});