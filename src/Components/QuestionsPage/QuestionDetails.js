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
import {StatusBar, Text, View, TouchableOpacity} from 'react-native';
import {Actions} from "react-native-router-flux/index";

export default class QuestionDetails extends Component {

    _onPressAnswer() {
       let a= this.props.dataArray.title;
        Actions.AddAnswer({id: a});
    }

    render() {
        return (
            <Container>
                <Content>
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
                                <Text style={{fontSize: 19}}>{this.props.dataArray.title}</Text>
                            </CardItem>

                            <CardItem bordered>
                                <Body>
                                <View style={{flexDirection: "row"}}>

                                    {this.props.dataArray.tags.map((tag) => {
                                            return (
                                                <View style={{marginRight: 10}}>
                                                    <Button light small block style={{width: 125}}>
                                                        <Text style={{fontSize: 10}}>{tag}</Text>
                                                    </Button>
                                                </View>
                                            );

                                        }
                                    )}

                                </View>

                                <Text>
                                    {this.props.dataArray.details}
                                </Text>
                                </Body>
                            </CardItem>
                            <CardItem footer bordered>
                                <Text>asked
                                    by {this.props.dataArray.askedBy} on {this.props.dataArray.askedDate.substr(0, 10)} </Text>
                            </CardItem>
                        </Card>
                    </Content>

                    <Content>
                        <Card>
                            <CardItem header bordered>
                                <Text style={{fontSize: 14}}>ANSWERS({this.props.dataArray.answers.length})</Text>
                            </CardItem>

                        </Card>
                    </Content>

                    {this.props.dataArray.answers.map((data) => {
                            return (<Content>
                                    <Card>

                                        <CardItem header bordered>
                                            <Body>
                                            <Text>
                                                {data.answer}
                                            </Text>
                                            </Body>
                                        </CardItem>

                                        <CardItem>
                                            <Text>answered by {data.answeredBy} on {data.answeredDate.substr(0, 10)}</Text>
                                        </CardItem>
                                    </Card>
                                </Content>
                            );


                        }
                    )}


                    <Footer>

                        <FooterTab>
                            <TouchableOpacity>
                                <Button onPress={()=>   Actions.AddAnswer({id: this.props.dataArray.id})} full style={{marginLeft: 140}}>
                                    <Text>Add Answer</Text>
                                </Button>
                            </TouchableOpacity>
                        </FooterTab>

                    </Footer>
                </Content>
            </Container>

        );
    }
}