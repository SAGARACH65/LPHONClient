import React, {Component} from 'react';

import {View, Image, TouchableOpacity} from 'react-native';

import {
    Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body
} from 'native-base';
import Search from 'react-native-search-box';

export default class Main extends Component {
    _onPress() {
        console.log("Nothing to do");
    }

    render() {
        return (
            <Container>

                <Content>

                    <View style={{paddingTop: 10}}>
                        <Search
                            ref="search_box"
                        />
                    </View>
                    < TouchableOpacity onPress={this._onPress}>

                        <Card style={{flex: 0}}>

                            <CardItem>
                                <Body>
                                <Image
                                    source={{uri: 'https://cdn.lynda.com/course/377830/377830-636190612926411830-16x9.jpg'}}
                                    style={{height: 181, width: 322, flex: 1}}/>
                                <Text>
                                    Course Name
                                </Text>
                                <Text>
                                    Author Name
                                </Text>
                                </Body>
                            </CardItem>
                        </Card>

                    </TouchableOpacity>
                </Content>
            </Container>


        );
    }
}