import React, {Component} from 'react';



import Form from './Form'
import ButtonSignup from "./ButtonSignup";

export default class ParentofButtonandForm extends Component {

    constructor() {
        super();

        this.state = {
            username: '',
            email:'',
            password : '',
            interests: ''

        };
    }

    changeUN=(receivedUN)=> {
        // console.log(receivedPW);
        this.setState({
            username: receivedUN,

        });
    };

    changeEM=(receivedEM)=> {
        // console.log(receivedPW);
        this.setState({
            email: receivedEM,

        });
    };
    changePW=(receivedPW)=> {
        // console.log(receivedPW);
        this.setState({

            password:receivedPW
        });
    };
    changeInterests=(receivedInterests)=> {
        // console.log(receivedPW);
        this.setState({

            interests:receivedInterests
        });
    };
    render() {
        return [

            <Form changeUN={this.changeUN} changePW={this.changePW} changeEM={this.changeEM} changeInterests={this.changeInterests}/>,
            <ButtonSignup  button_name="SIGN UP"  username={this.state.username} email={this.state.email} password={this.state.password} interests={this.state.interests}/>

        ];

    }
}