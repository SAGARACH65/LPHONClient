import React, { Component } from 'react';
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';

import LoginScreen from './LoginScreen';
import MainScreen from '../ViewPager/Main';
import SignupScreen from '../SignupPage/SignupScreen'

export default class LoginPage extends Component {
    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene key="loginScreen"
                           component={LoginScreen}
                           animation='fade'
                           hideNavBar={true}
                           initial={true}
                    />
                    {/*<Scene key="MainScreen"*/}
                           {/*component={MainScreen}*/}
                           {/*animation='fade'*/}
                           {/*hideNavBar={true}*/}
                    {/*/>*/}
                    <Scene key="SignupScreen"
                           component={SignupScreen}
                           animation='fade'
                           hideNavBar={true}
                    />



                </Scene>
            </Router>
        );
    }
}