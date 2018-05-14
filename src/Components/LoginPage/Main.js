import React, { Component } from 'react';
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';

import LoginScreen from './LoginScreen';
import MainScreen from '../MainPage/Main';
import SignupScreen from '../SignupPage/SignupScreen'

export default class LoginPage extends Component {
    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene key="loginScreen"
                           component={LoginScreen}
                           animation='fade'
                           hideNavBar
                           initial={true}
                    />
                    <Scene key="MainScreen"
                           component={MainScreen}
                           animation='fade'

                           navigationBarStyle={{ backgroundColor:'#faa0cc', borderBottomColor: 'transparent', borderBottomWidth: 0 }}
                    />
                    <Scene key="SignupScreen"
                           component={SignupScreen}
                           animation='fade'

                    />



                </Scene>
            </Router>
        );
    }
}