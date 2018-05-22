import React, {Component} from 'react';


import ButtonSubmit from './ButtonSubmit'
import Form from './Form'

export default class ParentofButtonandForm extends Component {

    constructor() {
        super();

        this.state = {
            username: '',
            password : ''

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

    render() {
        return [

            <Form changeUN={this.changeUN} changePW={this.changePW}/>,
            <ButtonSubmit   button_name="Login" username={this.state.username} password={this.state.password}/>

        ];

    }
}