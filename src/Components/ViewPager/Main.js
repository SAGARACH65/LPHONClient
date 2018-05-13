import React, {Component} from 'react';
import { Text } from 'react-native';
import ToolbarComponent from 'react-native-toolbar-component';


 import iconnews from './003-folded-newspaper.png';
import iconquestions from './002-customer-service.png';
import iconvideo from './001-play-button.png';
export default class Main extends Component {


    render() {
        return (
            <ToolbarComponent
                leftItem={{
                    title: 'Left',
                    layout: 'title',
                    onPress: () => {
                        console.log('pressed');
                    },
                }}
                righttem={{
                    title: 'Right',
                    layout: 'title',
                    onPress: () => {
                        console.log('pressed');
                    },
                }}
            >
                <Text>
                    Title
                </Text>
            </ToolbarComponent>
        );
    }



}