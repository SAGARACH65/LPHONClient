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
import {StatusBar, Text, View, TouchableOpacity,Image} from 'react-native';
import {Actions} from "react-native-router-flux/index";

export default class CoursesDetails extends Component {
//TODO add like and dislike with an option to upload videos and
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


                    <Card style={{flex: 0}}>
                        <CardItem>
                            <Body>
                            <Image
                                source={{uri: this.props.dataArray.imageLink}}
                                style={{height: 181, width: 322, flex: 1}}/>
                            <Text>
                                {this.props.dataArray.title}
                            </Text>
                            <Text>{}</Text> <Text>{}</Text> <Text>{}</Text>
                            <Text>
                                {this.props.dataArray.details}
                            </Text>

                            <Text>
                                {this.props.dataArray.uploadedBY} {this.props.dataArray.uploadedDate.substr(0, 10)}
                            </Text>
                            </Body>
                        </CardItem>
                    </Card>

                </Content>
            </Container>

        );
    }
}