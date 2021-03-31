import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return { history: state.history };
};

class History extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            logged: false
        };
    }

    static navigationOptions = {
        title: 'History'
    }

    render() {

        const renderHistory = ({ item }) => {
            return (
                <Card>
                    <Card.Title>{item.convertedAmount}</Card.Title>
                    <Card.Divider />
                    <View>
                        <Text>{item.amount} from {item.convertedFrom} to {item.convertedTo}</Text>
                    </View>
                </Card>
            )
        }
        return (
            <ScrollView>
                <View>
                    <Text style={{ fontSize: 30, textAlign: 'center' }}>Exchange History</Text>
                    <FlatList
                        data={this.props.history.history}
                        renderItem={renderHistory} />
                </View>
            </ScrollView>
        );
    }


}

export default connect(mapStateToProps)(History);