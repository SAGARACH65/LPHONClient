import React, {Component} from 'react';



import Form from './Form'
import ButtonSignup from "./ButtonSignup";

export default class ParentofButtonandForm extends Component {

    constructor() {
        super();

        this.state = {
            username: '',
            password : '',
            interests:''

        };
    }

    changeUN=(receivedUN)=> {
        // console.log(receivedPW);
        this.setState({
            username: receivedUN,

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

            <Form changeUN={this.changeUN} changePW={this.changePW} changeInterests={this.changeInterests}/>,
            <ButtonSignup  button_name="SIGN UP"  username={this.state.username} password={this.state.password} interests={this.state.interests}/>

        ];

    }
}