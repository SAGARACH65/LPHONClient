import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dimensions from 'Dimensions';
import {
    StyleSheet,
    KeyboardAvoidingView,
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

    onEmailChange = (text) => {
        this.props.changeEM(text);
        //  console.log(this.state.signInPassword);

    };
    onUserNameChange = (text) => {
        this.props.changeUN(text);
        //  console.log(this.state.signInPassword);

    };


    onPasswordChange = (text) => {

        this.props.changePW(text);
        // console.log(this.state.signInEmail);

    };
    onInterestsChange = (text) => {

        this.props.changeInterests(text);


    };
    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>

                <UserInput
                    source={usernameImg}
                    textchange={this.onUserNameChange}
                    placeholder="Username"
                    autoCapitalize={'none'}
                    returnKeyType={'done'}
                    autoCorrect={false}
                />
                <UserInput
                    source={usernameImg}
                    textchange={this.onEmailChange}
                    placeholder="Email"
                    autoCapitalize={'none'}
                    returnKeyType={'done'}
                    autoCorrect={false}
                />
                <UserInput source={passwordImg}
                           secureTextEntry={this.state.showPass}
                           placeholder="Password"
                           textchange={this.onPasswordChange}
                           returnKeyType={'done'}
                           autoCapitalize={'none'}
                           autoCorrect={false}
                />
                <UserInput source={eyeImg}
                           placeholder="Interests"
                           textchange={this.onInterestsChange}
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