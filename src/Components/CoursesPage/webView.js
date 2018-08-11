import React, {Component} from 'react';

import {AsyncStorage, NetInfo, StatusBar, Text, WebView, View, Button} from 'react-native';
import Toast from "react-native-same-toast";


import AdvancedWebView from './AdvancedWebview.android';
// import AndroidWebView from 'react-native-webview-android'
import Widget from './index.html'

export default class webView extends Component {
    constructor() {
        super();
    }

    render() {
        const width = 200, height = 200;
        return (
            <View style={{height: 700}}>
                <Button>Select</Button>

                <WebView
                    source={Widget} scalesPageToFit
                />
                {/*<AdvancedWebView*/}
                {/*source={{uri: "https://google.com/"}}*/}
                {/*style={{flex: 1, width, height}}*/}

                {/*/>*/}


            </View>
        );
    }
}

