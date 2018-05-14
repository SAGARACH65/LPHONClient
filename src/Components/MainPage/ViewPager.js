import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Text , Left, Body, Right, Button, Icon,E, Title} from 'native-base';
import QuestionsTab from '../QuestionsPage/Main';
import CoursesTab from '../CoursesPage/Main';
import NewsTab from '../NewsPage/Main';
import {StatusBar} from 'react-native';
export default class ViewPager extends Component {
    render() {
        //RNExitApp.exitApp()
        return (
            <Container  >
                <StatusBar hidden={false} />
                <Header hasTabs>
                    <Left>
                        <Button transparent >
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body >
                    <Title style={{textAlign:'left'}}>LPOHN</Title>
                    </Body>

                </Header>

                <Tabs >
                    <Tab heading={ <TabHeading><Icon type='Entypo' name="newsletter" /><Text>News</Text></TabHeading>}>
                        <NewsTab />
                    </Tab>
                    <Tab heading={ <TabHeading><Icon name="ios-videocam"/><Text>Courses</Text></TabHeading>}>
                        <CoursesTab />
                    </Tab>

                    <Tab heading={ <TabHeading><Icon type="MaterialIcons" name="question-answer"/><Text>Q&A</Text></TabHeading>}>
                        <QuestionsTab />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}