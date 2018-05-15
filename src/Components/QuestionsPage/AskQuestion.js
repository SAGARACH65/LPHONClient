import React, {Component} from 'react';
import {Container, Header, Content, Item, Input, Left, Button, Icon, Title, Body, Form, Textarea,Right} from 'native-base';
import {StatusBar, Text, TextInput} from 'react-native';

export default class AskQuestion extends Component {
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
                    <Title style={{textAlign: 'left'}}>Ask A Question</Title>
                    </Body>
                    <Right>
                        <Button >
                            <Text style={{color:'#ffffff'}}>POST</Text>
                        </Button>
                    </Right>
                </Header>

                <Content padder>
                    <Form>
                        <Item rounded style={{margin: 10}}>
                            <Input placeholder='Question Title'/>
                        </Item>
                        <Textarea rowSpan={15} bordered placeholder="Question Body"/>
                        <Item rounded style={{marginTop: 20}}>
                            <Input placeholder='Tags'/>
                        </Item>
                    </Form>
                </Content>


            </Container>

        );
    }
}