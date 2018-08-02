import React, {Component} from 'react';

import {View, Image, TouchableOpacity, AsyncStorage, NetInfo, RefreshControl} from 'react-native';

import {
    Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body
} from 'native-base';
import Search from 'react-native-search-box';
import Toast from "react-native-same-toast";
import {Actions} from "react-native-router-flux/index";

//proxy test data
// let dataArray = {
//     "courses": [{
//         "id": "abcde",
//         "courseName": "Learning Football",
//         "courseAuthor": "Kuroky Dunken",
//         "url": "https://static1.squarespace.com/static/5591498fe4b01fb0b8518a80/561e8bd1e4b0c3c46f51fe09/561e8c1de4b0c3c46f52008d/1444842528841/LOLPE18.jpg"
//     }, {
//         "id": "abcdf",
//         "courseName": "Bussiness Management",
//         "courseAuthor": "Steaphen Steel",
//         "url": "https://cdn.lynda.com/course/377830/377830-636190612926411830-16x9.jpg"
//     }, {
//         "id": "abcdf",
//         "courseName": "Building An ARC",
//         "courseAuthor": "Noah",
//         "url": "https://cdn.cnn.com/cnnnext/dam/assets/160608181115-ark-theme-park-kentucky-orig-nws-00000430-exlarge-169.jpg"
//     }
//     ]
//
// };
const apiUrl = 'http://192.168.43.91:3000/api/getVideo';
export default class Main extends Component {

    constructor() {
        super();
        this.state = {
            videoData: '',
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
                        this.setState({videoData: responseJson});
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


    _onPress() {
        console.log("Nothing to do");
    }


    render() {
        if (this.state.videoData === '') {
            return (
                <View><Text style={{textAlignVertical: "center", textAlign: "center"}}>Please Wait...</Text></View>
            );
        }
        return (
            <Container>


                <Content>

                    <View style={{paddingTop: 10}}>
                        <Search
                            ref="search_box"/>
                    </View>


                    {this.state.videoData.map((data) => {
                            return (
                                < TouchableOpacity key={data.id} onPress={() => {
                                    //send data to server
                                    Actions.CourseDetails({dataArray: data});
                                }}>

                                    <Card style={{flex: 0}}>

                                        <CardItem>
                                            <Body>
                                            <Image
                                                source={{uri: data.imageLink}}
                                                style={{height: 181, width: 322, flex: 1}}/>
                                            <Text>
                                                {data.title}
                                            </Text>
                                            <Text>
                                                {data.uploadedBY}
                                            </Text>
                                            </Body>
                                        </CardItem>
                                    </Card>

                                </TouchableOpacity>
                            );
                        }
                    )}

                </Content>
            </Container>

        );
    }
}