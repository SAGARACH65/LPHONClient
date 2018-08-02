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
    AsyncStorage,
    NetInfo,
    View,
} from 'react-native';

import Toast from 'react-native-same-toast';
import spinner from './loading.gif';
// import Ajax from '../../Ajax';
import {Actions} from "react-native-router-flux/index";


const apiURL = "http://192.168.43.91:3000/api/";
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const MARGIN = 40;

// import Toast, {DURATION} from 'react-native-easy-toast'

export default class ButtonSubmit extends Component {

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
        if (this.state.isLoading) return;
        // let c = this.props.username;
        // let b = this.props.password;
        this.setState({isLoading: true});

        NetInfo.isConnected.fetch().then(isConnected => {
            //      console.log('First, is ' + (isConnected ? 'online' : 'offline'));
            if (isConnected) {
                fetch(apiURL + '/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username: this.props.username,

                        password: this.props.password
                    })
                })
                    .then((response) => response.json())
                    .then(async (responseJson) => {
                        // console.log(responseJson);//Json resoponse is here

                        if (responseJson.status === 'success') {
                            // setTimeout(() => {
                            //     this._onGrow();
                            // }, 100);

                            // this.refs.toast.show('Logged in successful');

                            await AsyncStorage.setItem('token', responseJson.token);


                            this._onGrow();


                            this.setState({isLoading: false});
                            this.buttonAnimated.setValue(0);
                            this.growAnimated.setValue(0);

                            Actions.MainScreen();
                            //moving on to the main screen if server return success

                        } else {
                            this.setState({isLoading: false});
                            // this.refs.toast.show('Wrong username or Password');
                            Toast.showWithGravity("Wrong Username or Password", Toast.SHORT, Toast.BOTTOM);

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
                {/*<Toast ref="toast"/>*/}
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