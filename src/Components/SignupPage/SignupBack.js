import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dimensions from 'Dimensions';
import {StyleSheet, ImageBackground,StatusBar} from 'react-native';

import bgSrc from './wallpaper.png';

export default class SignupBack extends Component {
    render() {
        return (
            <ImageBackground style={styles.picture} source={bgSrc}>
                {this.props.children}
                <StatusBar hidden={true} />
            </ImageBackground>
        );
    }
}


const styles = StyleSheet.create({
    picture: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
    },
});