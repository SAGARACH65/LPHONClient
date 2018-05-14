import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Text , Left, Body, Right, Button, Icon, Title} from 'native-base';
import QuestionsTab from '../QuestionsPage/Main';
import CoursesTab from '../CoursesPage/Main';
import NewsTab from '../NewsPage/Main';

export default class ViewPager extends Component {
    render() {
        //RNExitApp.exitApp()
        return (
            <Container  >

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
                    <Tab heading={ <TabHeading><Icon name="newspaper" /><Text>News</Text></TabHeading>}>
                        <NewsTab />
                    </Tab>
                    <Tab heading={ <TabHeading><Icon name="ios-videocam"/><Text>Courses</Text></TabHeading>}>
                        <CoursesTab />
                    </Tab>

                    <Tab heading={ <TabHeading><Icon name="question-answer"/><Text>Q&A</Text></TabHeading>}>
                        <QuestionsTab />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}