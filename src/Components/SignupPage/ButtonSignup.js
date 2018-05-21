import React, {Component} from 'react';
import Dimensions from 'Dimensions';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    Animated,
    Easing,
    ImageBackground,
    Alert,
    View, NetInfo,
} from 'react-native';

const apiURL = "http://192.168.1.5:3000/api/";
import {Actions, ActionConst} from 'react-native-router-flux';

import spinner from '../LoginPage/loading.gif';
import Toast from "react-native-same-toast";
// import Ajax from './Ajax';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const MARGIN = 40;


export default class ButtonSignup extends Component {
    constructor() {
        super();

        this.state = {
            isLoading: false,
        };

        this.buttonAnimated = new Animated.Value(0);
        this.growAnimated = new Animated.Value(0);
        this._onPress = this._onPress.bind(this);
    }


    async _onPress() {
//if one request  is ongoing dont do the other
        if (this.state.isLoading) return;

        NetInfo.isConnected.fetch().then(isConnected => {
            //      console.log('First, is ' + (isConnected ? 'online' : 'offline'));
            if (isConnected) {
                 let tags = (this.props.interests.split(" "));
                fetch(apiURL + '/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username: this.props.username,
                        email: this.props.email,
                        password: this.props.password,
                         tags: tags
                    })
                })
                    .then((response) => response.json())
                    .then( (responseJson) => {
                        // console.log(responseJson);//Json resoponse is here

                        if (responseJson.status === 'success') {

                            this._onGrow();

                            Toast.showWithGravity("User Registered", Toast.SHORT, Toast.BOTTOM);

                            this.setState({isLoading: false});
                            this.buttonAnimated.setValue(0);
                            this.growAnimated.setValue(0);

                            Actions.popTo('loginScreen');
                            //moving on to the login screen if server return success

                        } else {
                            this.setState({isLoading: false});
                            // this.refs.toast.show('Wrong username or Password');
                            Toast.showWithGravity("Username or Email Already Taken! Please Try a new One", Toast.SHORT, Toast.BOTTOM);

                        }
                    })
                    .catch((error) => {
                        this.setState({isLoading: false});
                        console.log(error);
                        Toast.showWithGravity("Server Error", Toast.SHORT, Toast.BOTTOM);

                    });

            } else {
                this.setState({isLoading: false});
                Toast.showWithGravity("Please Connect to Internet", Toast.SHORT, Toast.BOTTOM);


            }

        });

    }


    _onGrow() {
        Animated.timing(this.growAnimated, {
            toValue: 1,
            duration: 200,
            easing: Easing.linear,
        }).start();
    }

    render() {

        const btn_name = this.props.button_name;

        const changeWidth = this.buttonAnimated.interpolate({
            inputRange: [0, 1],
            outputRange: [DEVICE_WIDTH - MARGIN, MARGIN],
        });
        const changeScale = this.growAnimated.interpolate({
            inputRange: [0, 1],
            outputRange: [1, MARGIN],
        });

        return (

            <View style={styles.container}>
                <Animated.View style={{width: changeWidth}}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this._onPress}
                        activeOpacity={1}>
                        {this.state.isLoading ? (
                            <ImageBackground
                                source={spinner}
                                style={styles.image}/>
                        ) : (
                            <Text style={styles.text}>{btn_name}</Text>
                        )}
                    </TouchableOpacity>
                    <Animated.View
                        style={[styles.circle, {transform: [{scale: changeScale}]}]}
                    />
                </Animated.View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F035E0',
        height: MARGIN,
        borderRadius: 20,
        zIndex: 100,
    },
    circle: {
        height: MARGIN,
        width: MARGIN,
        marginTop: -MARGIN,
        borderWidth: 1,
        borderColor: '#F035E0',
        borderRadius: 100,
        alignSelf: 'center',
        zIndex: 99,
        backgroundColor: '#F035E0',
    },
    text: {
        color: 'white',
        backgroundColor: 'transparent',
    },
    image: {
        width: 24,
        height: 24,
    },
});