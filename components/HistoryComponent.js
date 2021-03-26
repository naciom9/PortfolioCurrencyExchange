import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';

class History extends Component {
    constructor(props) {
        super(props);
        state = {

        }
    }

    static navigationOptions = {
        title: 'History'
    }

    render() {
        return (
            <View>
                <Text>Exchange History</Text>
            </View>
        );
    }
}

export default History;