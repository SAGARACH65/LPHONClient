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

import UserInput from './UserInput';
import ButtonSubmit from './ButtonSubmit';
import SignupSection from './SignupSection';

import usernameImg from './username.png';
import passwordImg from './password.png';
import eyeImg from './eye_black.png';

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
        //  this.setState({signInEmail: text});
        this.props.changeUN(text);
        //  console.log(this.state.signInPassword);

    };


    onPasswordChange = (text) => {
        // this.setState({signInPassword: text});
        this.props.changePW(text);
        // console.log(this.state.signInEmail);

    };


    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <UserInput
                    source={usernameImg}
                    textchange={this.onEmailChange}
                    placeholder="Username"
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
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.btnEye}
                    onPress={this.showPass}>
                    <ImageBackground source={eyeImg}
                                     style={styles.iconEye}/>
                </TouchableOpacity>
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