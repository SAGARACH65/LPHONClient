import React, {Component} from 'react';
import {
    Container,
    Header,
    Content,
    Left,
    Button,
    Card,
    CardItem,
    Icon,
    Title,
    Body,
} from 'native-base';
import {StatusBar, Text, View, TouchableOpacity, Image, NetInfo, AsyncStorage, Animated, Linking} from 'react-native';
import {Actions} from "react-native-router-flux/index";
import Toast from "react-native-same-toast";

const apiUrl = 'http://192.168.1.6:3000/api/addVideoToProfile';
const apiUrlLike = 'http://192.168.1.6:3000/api/addLikeDislike';
import FilePickerManager from 'react-native-file-picker';


class CoursesDetails extends Component {


    constructor() {
        super();
        this.state = {
            file: ''
        };

    }


    // onPressDownload() {
    //     // FilePickerManager.showFilePicker(null, (response) => {
    //     //     console.log('Response = ', response);
    //     //
    //     //     if (response.didCancel) {
    //     //         console.log('User cancelled file picker');
    //     //     }
    //     //     else if (response.error) {
    //     //         console.log('FilePickerManager Error: ', response.error);
    //     //     }
    //     //     else {
    //     //         this.setState({
    //     //             file: response
    //     //         });
    //     //
    //     //         var peer = new Peer('acharya');
    //     //         var con = peer.connect('sagar', {
    //     //             label: "file",
    //     //             reliable: true,
    //     //             serialization: "none"
    //     //         });
    //     //         var fileSize = this.state.file.fileName;
    //     //         var name = this.state.file.fileName;
    //     //         var mime = this.state.file.type;
    //     //         var path = this.state.file.path;
    //     //         var chunkSize = 64 * 1024; // bytes
    //     //         var offset = 0;
    //     //
    //     //     }
    //     // });
    //
    // }


    async onPressLike(like) {
        const token = await AsyncStorage.getItem('token');
        NetInfo.isConnected.fetch().then(isConnected => {

            if (isConnected) {
                fetch(apiUrlLike, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        token: token,
                        title: this.props.dataArray.title,
                        like: like
                    })
                })
                    .then((response) => response.json())
                    .then(async (responseJson) => {
                        // console.log(responseJson);//Json resoponse is here

                        if (responseJson.status === 'success') {

                        } else {
                            this.setState({isLoading: false});
                            // this.refs.toast.show('Wrong username or Password');
                            Toast.showWithGravity("something went wrong", Toast.SHORT, Toast.BOTTOM);

                        }
                    })
                    .catch((error) => {
                        this.setState({isLoading: false});
                        console.log(error);
                        Toast.showWithGravity("Server Error", Toast.SHORT, Toast.BOTTOM);

                    });

            } else {
                this.setState({isLoading: false});
                Toast.showWithGravity("Please Connect to Internet", Toast.SHORT, Toast.BOTTOM);


            }

        });
    }

//this tells the server that the client viewed the video
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
                        token: token,
                        title: this.props.dataArray.title
                    })
                })
                    .then((response) => response.json())
                    .then((responseJson) => {
                        //i have not error handled here
                    })
                    .catch((error) => {
                        Toast.showWithGravity("Server main jsError", Toast.SHORT, Toast.BOTTOM);
                    });

            } else {
                Toast.showWithGravity("No internet connection", Toast.SHORT, Toast.BOTTOM);
            }
        });
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
                        <Title style={{textAlign: 'left'}}>LPHON</Title>
                        </Body>
                    </Header>

                    <Content>
                        <Card style={{flex: 0}}>
                            <CardItem>
                                <Body>
                                <Image
                                    source={{uri: this.props.dataArray.imageLink}}
                                    style={{height: 181, width: 322, flex: 1}}/>
                                <Text>
                                    {this.props.dataArray.title}
                                </Text>
                                <Text>
                                    {this.props.dataArray.details}
                                </Text>

                                <Text>
                                    {this.props.dataArray.uploadedBY} {this.props.dataArray.uploadedDate.substr(0, 10)}
                                </Text>
                                </Body>
                            </CardItem>
                            <CardItem>
                                <Button light style={{margin: 3, padding: 10}} onPress={this.onPressLike.bind(this, 1)}>
                                    <Icon type='Entypo' name='thumbs-up'/>
                                </Button>
                                <Button light style={{margin: 3, padding: 10}}
                                        onPress={this.onPressLike.bind(this, -1)}>
                                    <Icon type='Entypo' name='thumbs-down'/>
                                </Button>
                            </CardItem>
                        </Card>


                        <Button block light onPress={() => Linking.openURL('http://192.168.1.6:3000/api/getP2PHTML')}>
                            <Text>Download</Text>
                        </Button>


                    </Content>
                </Content>
            </Container>

        );
    }
}

export default CoursesDetails;