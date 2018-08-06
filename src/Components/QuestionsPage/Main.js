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
import {View, TouchableOpacity, NetInfo, AsyncStorage, RefreshControl} from 'react-native';

const apiUrl = 'http://192.168.1.4:3000/api/getQuestions';
import {Actions} from "react-native-router-flux/index";
import Toast from "react-native-same-toast";

export default class Main extends Component {
    constructor() {
        super();
        this.state = {
            questionsData: '',
            refreshing: false
        }
    }

    async componentDidMount() {
        NetInfo.isConnected.fetch().then(async isConnected => {
            const token = await AsyncStorage.getItem('token');
            if (isConnected) {
                fetch(apiUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        token: token
                    })
                })
                    .then((response) => response.json())
                    .then((responseJson) => {
                        this.setState({questionsData: responseJson});
                    })
                    .catch((error) => {
                        Toast.showWithGravity("Server main jsError", Toast.SHORT, Toast.BOTTOM);
                    });

            } else {
                Toast.showWithGravity("No internet connection", Toast.SHORT, Toast.BOTTOM);
            }
        });
    }

    _onRefresh = async () => {
        this.setState({refreshing: true});
        NetInfo.isConnected.fetch().then(async isConnected => {
            const token = await AsyncStorage.getItem('token');
            if (isConnected) {
                fetch(apiUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        token: token
                    })
                })
                    .then((response) => response.json())
                    .then((responseJson) => {
                        this.setState({questionsData: responseJson});
                    })
                    .catch((error) => {
                        Toast.showWithGravity("Server main jsError", Toast.SHORT, Toast.BOTTOM);
                    });

            } else {
                Toast.showWithGravity("No internet connection", Toast.SHORT, Toast.BOTTOM);
            }
        });
        this.setState({refreshing: false});
    };

    _onPressAskQ() {
        Actions.AskQuestion();
    }


    render() {
        if (this.state.questionsData === '') {
            return (
                <View><Text style={{textAlignVertical: "center", textAlign: "center"}}>Please Wait...</Text></View>
            );
        }
        return (
            <Container>
                <Content padder refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh}
                    />
                }>
                    {this.state.questionsData.map((data) => {
                            return (
                                < TouchableOpacity key={data.title} onPress={() => {
                                    Actions.QuestionDetails({dataArray: data});
                                }}>
                                    <Card>
                                        <CardItem header bordered>
                                            <Text style={{fontSize: 19}}>{data.title}</Text>
                                        </CardItem>

                                        <CardItem bordered>
                                            <Body>
                                            <View style={{flexDirection: "row"}}>
                                                {data.tags.map((tag) => {
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
                                            </Body>
                                        </CardItem>
                                        <CardItem footer bordered>
                                            <Text>asked by {data.askedBy} on {data.askedDate.substr(0, 10)}</Text>
                                        </CardItem>
                                    </Card>
                                </TouchableOpacity>
                            );
                        }
                    )}
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

        );
    }
}