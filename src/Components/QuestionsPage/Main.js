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
import {View, TouchableOpacity} from 'react-native';

import {Actions} from "react-native-router-flux/index";

let dataArray = {
    "questions": [{
        "title": "React Native Pass data between sibling views",
        "details": "I'm developing a simple todo-list app using React Native, my issue is the following: I've a NavigatorIOS at the root of my project, with a component containing a ListView as initial route, and a navigation bar button that leads to a task creation view.\n" +
        "\n" +
        "Once a new task has been created, the view is pop so that the ListView is displayed. I'm trying to add my newly created task to this ListView (its datasource is contained in the component state).\n" +
        "\n" +
        "How to perform such an operation, what's the good practice? I would use a delegate in pure native app but here, both views are handled by the NavigatorIOS instance.",
        "askedBY": "Sagar Acharya",
        "date": "14th March",
        "tags": [{"name": "Programming"}, {"name": "React.js"}],
        "answers": [{
            "name": "Tom Hanks",
            "answer": "You should rewrite your constructor function to get the data from a dynamic way. Then when the page reloads, it would get a correct data which includes the new task. Here you get the data from a static array, which would not change.\n" +
            "\n" +
            "Save tasks list to local file or Firebase, and read when construct.\n",
            "date": "14th March"
        },
            {
                "name": "Tom Hanks",
                "answer": "\n" +
                "\n" +
                "The React-Native documentation has a brief section on approaches to communicating between components.\n" +
                "\n" +
                "When you're trying to do something more complicated than a parent->child or child->parent relationship, there are a few options:\n" +
                "\n" +
                "    Manager pattern. For true sibling<->sibling communications (i.e. where the two siblings share a parent via composition), you can have the parent manage the state. For example, you might have a <MyConsole> widget that has a <TextInput> and a <ListView> containing the past inputs by a user, both are children of the <Console> widget.\n" +
                "        Here, the <Console> can act as a manager. When the <TextInput>changes its value, you can use the onChangeText event to pass the new value up to the parent <MyConsole> component, which then updates its state and passes that onto its children.\n" +
                "\n" +
                "    Event (publish-subscribe) pattern. Remember that components are just objects, and so you can use object oriented approaches to communicating between components. The React documents note that:\n" +
                "\n" +
                "        For communication between two components that don't have a parent-child relationship, you can set up your own global event system. Subscribe to events in componentDidMount(), unsubscribe in componentWillUnmount(), and call setState() when you receive an event.\n" +
                "\n" +
                "        Here, you can use a simple publish-subscribe library like pubsub.js so that when one component changes it just publishes the change and other related components can listen for the event and update themselves. This can be a very effective approach for smaller apps.\n" +
                "\n" +
                "    Flux pattern. One of the drawbacks with a pure publish/subscribe system is, it becomes difficult to keep track of state. For example, if you have 2 components (e.g. EditTitle, EditBody) which can both update some state like an email message, then a pure eventing system ends up passing different versions of state around which can get messy with conflicts because there is no \"single version of the truth\". This is where React's flux approach comes in. With flux, components update a data store which is responsible for updating and reconciling data (e.g. EmailDataStore), and the store then notifies components of the updated state.\n" +
                "        So in your example, the task view would issue an update (e.g. via publish, or direct function invocation) to a TasksDataStore, which might then publish an event like tasks-updated to its subscribers. Both the tasks panel and the results panel would subscribe to the data store.\n" +
                "\n" +
                "When setting up subscriptions, it's best to add subscriptions after the component mounts and definitely remove them before the component unmounts (otherwise you end up with a lot of orphaned subscriptions).\n",
                "date": "14th March"
            },
            {
                "name": "Tom Hanks",
                "answer": "HEllo",
                "date": "14th March"
            }]
    },

        {
            "title": "React Native Pass data between sibling views",
            "details": "I'm developing a simple todo-list app using React Native, my issue is the following: I've a NavigatorIOS at the root of my project, with a component containing a ListView as initial route, and a navigation bar button that leads to a task creation view.\n" +
            "\n" +
            "Once a new task has been created, the view is pop so that the ListView is displayed. I'm trying to add my newly created task to this ListView (its datasource is contained in the component state).\n" +
            "\n" +
            "How to perform such an operation, what's the good practice? I would use a delegate in pure native app but here, both views are handled by the NavigatorIOS instance.",
            "askedBY": "Sagar Acharya",
            "date": "14th March",
            "tags": [{"name": "Programming"}, {"name": "Node.js"}],
            "answers": [{
                "name": "Tom Hanks",
                "answer": "\n" +
                "\n" +
                "You should rewrite your constructor function to get the data from a dynamic way. Then when the page reloads, it would get a correct data which includes the new task. Here you get the data from a static array, which would not change.\n" +
                "\n" +
                "Save tasks list to local file or Firebase, and read when construct.\n",
                "date": "14th March"
            },
                {
                    "name": "Tom Hanks",
                    "answer": "\n" +
                    "\n" +
                    "The React-Native documentation has a brief section on approaches to communicating between components.\n" +
                    "\n" +
                    "When you're trying to do something more complicated than a parent->child or child->parent relationship, there are a few options:\n" +
                    "\n" +
                    "    Manager pattern. For true sibling<->sibling communications (i.e. where the two siblings share a parent via composition), you can have the parent manage the state. For example, you might have a <MyConsole> widget that has a <TextInput> and a <ListView> containing the past inputs by a user, both are children of the <Console> widget.\n" +
                    "        Here, the <Console> can act as a manager. When the <TextInput>changes its value, you can use the onChangeText event to pass the new value up to the parent <MyConsole> component, which then updates its state and passes that onto its children.\n" +
                    "\n" +
                    "    Event (publish-subscribe) pattern. Remember that components are just objects, and so you can use object oriented approaches to communicating between components. The React documents note that:\n" +
                    "\n" +
                    "        For communication between two components that don't have a parent-child relationship, you can set up your own global event system. Subscribe to events in componentDidMount(), unsubscribe in componentWillUnmount(), and call setState() when you receive an event.\n" +
                    "\n" +
                    "        Here, you can use a simple publish-subscribe library like pubsub.js so that when one component changes it just publishes the change and other related components can listen for the event and update themselves. This can be a very effective approach for smaller apps.\n" +
                    "\n" +
                    "    Flux pattern. One of the drawbacks with a pure publish/subscribe system is, it becomes difficult to keep track of state. For example, if you have 2 components (e.g. EditTitle, EditBody) which can both update some state like an email message, then a pure eventing system ends up passing different versions of state around which can get messy with conflicts because there is no \"single version of the truth\". This is where React's flux approach comes in. With flux, components update a data store which is responsible for updating and reconciling data (e.g. EmailDataStore), and the store then notifies components of the updated state.\n" +
                    "        So in your example, the task view would issue an update (e.g. via publish, or direct function invocation) to a TasksDataStore, which might then publish an event like tasks-updated to its subscribers. Both the tasks panel and the results panel would subscribe to the data store.\n" +
                    "\n" +
                    "When setting up subscriptions, it's best to add subscriptions after the component mounts and definitely remove them before the component unmounts (otherwise you end up with a lot of orphaned subscriptions).\n",
                    "date": "14th March"
                },
                {
                    "name": "Tom Hanks",
                    "answer": "Hello",
                    "date": "14th March"
                }]
        }

    ]
};


export default class Main extends Component {

    _onPressAskQ() {
        Actions.AskQuestion();
    }
    render() {
        return (
            <Container>
                <Content padder>

                    {dataArray.questions.map((data) => {
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
                                                {data.tags.map((data) => {
                                                        return (
                                                            <View style={{marginRight: 10}}>
                                                                <Button light small block style={{width: 125}}>
                                                                    <Text style={{fontSize: 10}}>{data.name}</Text>
                                                                </Button>
                                                            </View>
                                                        );
                                                    }
                                                )}
                                            </View>
                                            </Body>
                                        </CardItem>
                                        <CardItem footer bordered>
                                            <Text>asked by {data.askedBY} {data.date}</Text>
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