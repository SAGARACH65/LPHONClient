import React, {Component} from 'react';
import {Container, Header, Content, Item, Input, Left, Button, Icon, Title, Body, Form, Textarea,Right} from 'native-base';
import {StatusBar, Text, TextInput} from 'react-native';


export default class AddAnswer extends Component {
    render() {
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
                        <Button >
                            <Text style={{color:'#ffffff'}}>POST</Text>
                        </Button>
                    </Right>
                </Header>
                <Content padder>

                        <Textarea rowSpan={21} bordered placeholder="Your Answer...."/>

                </Content>



            </Container>

        );
    }
}