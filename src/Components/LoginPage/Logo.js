import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, Text, ImageBackground} from 'react-native';

import logoImg from './logo.png';

export default class Logo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={logoImg}
                    style={styles.image} />
                <Text style={styles.text}>LEARNING PLATFORM OVER HETEROGENOUS NETWORK</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 80,
        height: 80,
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: 'transparent',
        marginTop: 20,
    },
});