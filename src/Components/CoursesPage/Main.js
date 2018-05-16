import React, {Component} from 'react';

import {View, Image, TouchableOpacity} from 'react-native';

import {
    Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body
} from 'native-base';
import Search from 'react-native-search-box';


let dataArray = {
    "courses": [{
        "id": "abcde",
        "courseName": "Learning Football",
        "courseAuthor": "Kuroky Dunken",
        "url": "https://static1.squarespace.com/static/5591498fe4b01fb0b8518a80/561e8bd1e4b0c3c46f51fe09/561e8c1de4b0c3c46f52008d/1444842528841/LOLPE18.jpg"
    }, {
        "id": "abcdf",
        "courseName": "Bussiness Management",
        "courseAuthor": "Steaphen Steel",
        "url": "https://cdn.lynda.com/course/377830/377830-636190612926411830-16x9.jpg"
    }, {
        "id": "abcdf",
        "courseName": "Building An ARC",
        "courseAuthor": "Noah",
        "url": "https://cdn.cnn.com/cnnnext/dam/assets/160608181115-ark-theme-park-kentucky-orig-nws-00000430-exlarge-169.jpg"
    }

    ]

};
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
                            ref="search_box"/>
                    </View>

                    {dataArray.courses.map((data) => {
                            return (
                                < TouchableOpacity key={data.id} onPress={this._onPress}>

                                    <Card style={{flex: 0}}>

                                        <CardItem>
                                            <Body>
                                            <Image
                                                source={{uri: data.url}}
                                                style={{height: 181, width: 322, flex: 1}}/>
                                            <Text>
                                                {data.courseName}
                                            </Text>
                                            <Text>
                                                {data.courseAuthor}
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