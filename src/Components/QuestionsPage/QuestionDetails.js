import React, {Component} from 'react';
import {
    Container,
    Header,
    Content,
    Item,
    Input,
    Left,
    Button,
    Card,
    CardItem,
    Icon,
    Title,
    Body,
    Form,
    Footer,
    FooterTab,
    Textarea,
    Right
} from 'native-base';
import {StatusBar, Text, View,TouchableOpacity} from 'react-native';
import {Actions} from "react-native-router-flux/index";

export default class QuestionDetails extends Component {
  _onPressAnswer(){
      Actions.AddAnswer();
  }
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
                    <Title style={{textAlign: 'left'}}>LPOHN</Title>
                    </Body>

                </Header>


                <Content>

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

                            <Text>
                                NativeBase is a free and open source framework that enable
                                developers to build
                                high-quality mobile apps using React Native iOS and Android
                                apps
                                with a fusion of ES6.
                            </Text>
                            </Body>
                        </CardItem>
                        <CardItem footer bordered>
                            <Text>asked by Emma Watson                   14th March</Text>
                        </CardItem>
                    </Card>


                </Content>

                <Content>
                    <Card>
                        <CardItem header bordered>
                            <Text style={{fontSize: 14}}>ANSWERS(1)</Text>
                        </CardItem>

                        <CardItem bordered>
                            <Body>


                            <Text>
                                NativeBase is a free and open source framework that enable
                                developers to build
                                high-quality mobile apps using React Native iOS and Android
                                apps
                                with a fusion of ES6.
                            </Text>
                            </Body>
                        </CardItem>
                        <CardItem   >
                            <Text >answered by Tom  Hanks                     14th March</Text>
                        </CardItem>
                    </Card>
                </Content>


                <Footer>

                    <FooterTab>
                        <TouchableOpacity>
                            <Button onPress={this._onPressAnswer} full style={{marginLeft: 140}}>
                                <Text>Add Answer</Text>
                            </Button>
                        </TouchableOpacity>
                    </FooterTab>

                </Footer>

            </Container>

        );
    }
}