import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Form from './Form';
import Wallpaper from './SignupBack';
import ParentofButtonandForm from './ParentofButtonandForm';
import SimpleText from './SimpleText';



export default class SignupScreen extends Component {
    render() {
        return (
            <Wallpaper>
                <SimpleText/>
                <ParentofButtonandForm/>
            </Wallpaper>
        );
    }
}