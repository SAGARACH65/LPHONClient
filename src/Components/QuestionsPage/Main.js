import React, {Component} from 'react';
import {
    Container,
    Content,
    Button,
    Card,
    CardItem,
    Text,
    Body,
    Footer,
    FooterTab
} from "native-base";
import {View, TouchableOpacity} from 'react-native';

import {Actions} from "react-native-router-flux/index";

export default class Main extends Component {
    _onPress() {

        Actions.QuestionDetails();
    }

    _onPressAskQ() {
        Actions.AskQuestion();
    }

    render() {
        return (
            <Container>
                <Content padder>
                    < TouchableOpacity onPress={this._onPress}>
                        <Card>
                            <CardItem header bordered>
                                <Text style={{fontSize: 19}}>Why sagar's dick so big? and shreyam's dick so
                                    small?</Text>
                            </CardItem>

                            <CardItem bordered>
                                <Body>
                                <View style={{flexDirection: "row"}}>
                                    <View style={{marginRight: 10}}>
                                        <Button light small block style={{width: 80}}>
                                            <Text style={{fontSize: 10}}>Shitty_Q</Text>
                                        </Button>
                                    </View>
                                    <View style={{marginRight: 10}}>
                                        <Button light small block style={{width: 80}}>
                                            <Text style={{fontSize: 10}}>Shitty_Q</Text>
                                        </Button>
                                    </View>

                                </View>
                                </Body>
                            </CardItem>
                            <CardItem footer bordered>
                                <Text>asked by Emma Watson 14th March</Text>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>
                </Content>

                <Footer>

                    <FooterTab>
                        <TouchableOpacity>
                            <Button onPress={this._onPressAskQ} full style={{marginLeft: 120}}>
                                <Text>Ask A Question</Text>
                            </Button>
                        </TouchableOpacity>
                    </FooterTab>

                </Footer>

            </Container>
            ////{color:'#bcbbbb',fontStyle:'italics'}
        );
    }
}