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
import {AsyncStorage, NetInfo, StatusBar, Text} from 'react-native';
import Toast from "react-native-same-toast";
import {Actions} from "react-native-router-flux/index";


const apiUrl = 'http://192.168.1.6:3000/api/addVideo';
let title, body, tag, imageLink;
export default class AddVideos extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            details: '',
            tags: '',
            imageLink: '',
            location: ''
        }
    }

    sendVideo() {
        NetInfo.isConnected.fetch().then(async isConnected => {
            const token = await AsyncStorage.getItem('token');
            if (isConnected) {
                let tags = tag.split(" ");
                fetch(apiUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        token: token,
                        title: title,
                        details: body,
                        tags: tags,
                        imageLink: imageLink
                    })
                })
                    .then((response) => response.json())
                    .then((responseJson) => {
                        if (responseJson.status === 'success') {
                            Toast.showWithGravity("Video Added", Toast.SHORT, Toast.BOTTOM);

                            setTimeout(() => Actions.pop({refresh: {name: "hello"}}), 200);

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

    _onTitleChange(title) {
        this.setState({
            title: title
        });
    }

    _onBodyChange(body) {
        this.setState({
            body: body
        });
    }

    _onTagsChange(tags) {
        this.setState({
            tags: tags
        });
    }

    _onLinkChange(link) {
        this.setState({
            imageLink: link
        });
    }


    render() {
        title = this.state.title;
        body = this.state.body;
        tag = this.state.tags.toLocaleLowerCase();
        imageLink = this.state.imageLink;
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
                    <Title style={{textAlign: 'left'}}>Add Video</Title>
                    </Body>
                    <Right>
                        <Button onPress={this.sendVideo}>
                            <Text style={{color: '#ffffff'}}>LIST</Text>
                        </Button>
                    </Right>
                </Header>

                <Content padder>
                    <Form>
                        <Item rounded style={{margin: 10}}>
                            <Input onChangeText={(text) => this._onTitleChange(text)} on placeholder='Video Title'/>
                        </Item>
                        <Textarea onChangeText={(text) => this._onBodyChange(text)} rowSpan={8} bordered
                                  placeholder="Video Details"/>
                        <Item rounded style={{marginTop: 20}}>
                            <Input onChangeText={(text) => this._onTagsChange(text)} placeholder='Tags'/>
                        </Item>
                        <Item rounded style={{marginTop: 20}}>
                            <Input onChangeText={(text) => this._onLinkChange(text)} placeholder='ImageLink'/>
                        </Item>
                    </Form>
                </Content>
            </Container>

        );
    }
}