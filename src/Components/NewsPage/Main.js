import React, {Component} from 'react';
import {Image, View, Linking, NetInfo, AsyncStorage, RefreshControl} from 'react-native';
import {Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body} from 'native-base';
import {Actions} from "react-native-router-flux/index";
import Toast from "react-native-same-toast";

const apiUrl = 'http://192.168.43.91:3000/api/getnews?token=';

export default class Main extends Component {

    constructor() {
        super();
        this.state = {
            newsData: '',
            refreshing: false
        }
    }

    async fetchFromAPIAndSet() {


    }

    async componentDidMount() {
        NetInfo.isConnected.fetch().then(async isConnected => {
            const token = await AsyncStorage.getItem('token');
            if (isConnected) {
                fetch(apiUrl + token)
                    .then((response) => response.json())
                    .then((responseJson) => {
                        this.setState({newsData: responseJson});
                    })
                    .catch((error) => {
                        console.error(error);
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
                fetch(apiUrl + token)
                    .then((response) => response.json())
                    .then((responseJson) => {
                        this.setState({newsData: responseJson});
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            } else {
                Toast.showWithGravity("No internet connection", Toast.SHORT, Toast.BOTTOM);
            }
        });


        this.setState({refreshing: false});
    };

    render() {
        if (this.state.newsData === '') {
            return (
                <View><Text style={{textAlignVertical: "center", textAlign: "center"}}>Please Wait...</Text></View>
            )
        }
        return (
            <Container>
                <Content refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh}
                    />
                }>
                    {this.state.newsData.map((data) => {
                            return (<Card key={data.publishedAt} style={{flex: 0}}>
                                    <CardItem header bordered>
                                        <Left>
                                            <Body>
                                            <Text style={{fontWeight: 'bold'}}>{data.title}</Text>
                                            <Text note>{data.publishedAt.substr(0, 10)}</Text>
                                            </Body>
                                        </Left>
                                    </CardItem>
                                    <CardItem bordered>
                                        <Body>
                                        <Image
                                            source={{uri: data.urlToImage}}
                                            style={{height: 180, width: 322, flex: 1}}/>
                                        <Text style={{fontSize: 14}}>
                                            {data.description}
                                        </Text>
                                        </Body>
                                    </CardItem>
                                    <CardItem bordered>
                                        <Left>
                                            <Button transparent onPress={() => Linking.openURL(data.url)}
                                                    textStyle={{color: '#87838B'}}>
                                                <Icon name="unread" type='Entypo'/>
                                                <Text>View Full</Text>
                                            </Button>
                                        </Left>
                                    </CardItem>
                                </Card>
                            );
                        }
                    )}
                </Content>
            </Container>
        );
    }
}

