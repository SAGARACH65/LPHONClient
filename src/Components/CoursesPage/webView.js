import React, {Component} from 'react';

import {AsyncStorage, NetInfo, StatusBar, Text, WebView, View} from 'react-native';
import Toast from "react-native-same-toast";

import Widget from './index.html'

export default class webView extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <View style={{height: 350}}>
                <WebView
                    source={Widget} scalesPageToFit
                />
            </View>
        );
    }
}

