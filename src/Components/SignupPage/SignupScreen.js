import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Form from './Form';
import Wallpaper from './SignupBack';
import ButtonSubmit from '../LoginPage/ButtonSubmit';
import SimpleText from './SimpleText';


export default class SignupScreen extends Component {
    render() {
        return (
            <Wallpaper>
                <SimpleText/>
                <Form />
                <ButtonSubmit  button_name="SIGN UP" />
            </Wallpaper>
        );
    }
}