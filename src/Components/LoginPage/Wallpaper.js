import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dimensions from 'Dimensions';
import {StyleSheet, ImageBackground,StatusBar} from 'react-native';



export default class Wallpaper extends Component {
    render() {
        return (
            <ImageBackground style={styles.picture} source={this.props.bgSrc}>
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