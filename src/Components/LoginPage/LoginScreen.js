import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo';
import Form from './Form';
import Wallpaper from './Wallpaper';
import ButtonSubmit from './ButtonSubmit';
import ParentofButtonandForm from './ParentofButtonandForm';
import SignupSection from './SignupSection';

import bgSrc from './loginBack.jpg';

export default class LoginScreen extends Component {
    render() {
        return (
            <Wallpaper bgSrc={bgSrc}>
                <Logo />
                <ParentofButtonandForm/>
                <SignupSection />

            </Wallpaper>
        );
    }
}