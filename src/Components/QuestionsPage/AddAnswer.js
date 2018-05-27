import React, {Component} from 'react';
import {
    Container,
    Header,
    Content,
    Item,
    Input,
    Left,
    Button,
    Icon,
    Title,
    Body,
    Form,

    Textarea,
    Right
} from 'native-base';
import {AsyncStorage, NetInfo, StatusBar, Text, TextInput} from 'react-native';
import Toast from "react-native-same-toast";
import {Actions} from "react-native-router-flux/index";

const apiUrl = 'http://192.168.1.4:3000/api/answerQuestion';
let questionId, answer;
export default class AddAnswer extends Component {
    constructor() {
        super();
        this.state = {
            answer: ''
        }
    }

    sendAnswer() {
        NetInfo.isConnected.fetch().then(async isConnected => {
            const token = await AsyncStorage.getItem('token');
            if (isConnected) {
                fetch(apiUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        token: token,
                        answer: answer,
                        id: questionId
                    })
                })
                    .then((response) => response.json())
                    .then((responseJson) => {
                        if (responseJson.status === 'success') {
                            Toast.showWithGravity("Answer Added", Toast.SHORT, Toast.BOTTOM);

                            //popping back to main page of ask question and it calls componentWillReceiveProps method
                            //where according to the id we again navigate to questionDetails
                            //this is done becoz questionDetails itself doesnot make the APi call
                            //the main page passes the data to questionDetails
                            setTimeout(() => Actions.pop({popNum: 2}, {refresh: {name: "hello"}}), 200);

                        } else {
                            Toast.showWithGravity("Please Try again Later", Toast.SHORT, Toast.BOTTOM);
                        }

                    })
                    .catch((error) => {
                        Toast.showWithGravity("Server  Error", Toast.SHORT, Toast.BOTTOM);
                        console.log(error);
                    });

            } else {
                Toast.showWithGravity("No internet connection", Toast.SHORT, Toast.BOTTOM);
            }
        });
    }

    _onAnswerChange(answer) {
        this.setState({
            answer: answer
        });
    }

    render() {
        answer = this.state.answer;
        questionId = this.props.id;
        return (
            <Container>
                <StatusBar hidden={false}/>
                <Header hasTabs>
                    <Left>
                        <Button transparent>
                            <Icon name='arrow-back'/>
                        </Button>
                    </Left>
                    <Body>
                    <Title style={{textAlign: 'left'}}>Answer</Title>
                    </Body>
                    <Right>
                        <Button onPress={this.sendAnswer}>
                            <Text style={{color: '#ffffff'}}>POST</Text>
                        </Button>
                    </Right>
                </Header>
                <Content padder>
                    <Textarea onChangeText={(text) => this._onAnswerChange(text)} rowSpan={21} bordered
                              placeholder="Your Answer...."/>
                </Content>
            </Container>

        );
    }
}