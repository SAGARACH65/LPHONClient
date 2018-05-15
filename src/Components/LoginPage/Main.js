import React, {Component} from 'react';
import {Router, Scene, Actions, ActionConst} from 'react-native-router-flux';

import LoginScreen from './LoginScreen';
import MainScreen from '../MainPage/Main';
import SignupScreen from '../SignupPage/SignupScreen';
import AskQuestion from '../QuestionsPage/AskQuestion';
import QuestionDetails from '../QuestionsPage/QuestionDetails';

import AddAnswer from '../QuestionsPage/AddAnswer';
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

                           navigationBarStyle={{
                               backgroundColor: '#faa0cc',
                               borderBottomColor: 'transparent',
                               borderBottomWidth: 0
                           }}
                    />
                    <Scene key="SignupScreen"
                           component={SignupScreen}
                           animation='fade'

                    />
                    <Scene key="AskQuestion"
                           component={AskQuestion}
                           animation='fade'

                    />

                    <Scene key="QuestionDetails"
                           component={QuestionDetails}
                           animation='fade'

                    />

                    <Scene key="AddAnswer"
                           component={AddAnswer}
                           animation='fade'

                    />


                </Scene>
            </Router>
        );
    }
}