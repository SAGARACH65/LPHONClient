/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


import LoginPage from './src/Components/LoginPage/Main';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        <View style={styles.container}>
            <LoginPage />
        </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
});