import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Card, ListItem, } from 'react-native-elements';
import Login from './LoginComponent';
import Main from './MainComponent';
import Exchange from './ExchangeComponent';
import { FlatList } from 'react-native-gesture-handler';
import { Tile } from 'react-native-elements/dist/tile/Tile';
import { StyleSheet } from 'react-native';

const mapStateToProps = state => {
    return { users: state.users };
};

class History extends Component {
    constructor(props) {
        super(props);
        state = {
            logged: 
        }
    }

    static navigationOptions = {
        title: 'History'
    }

    render() {

        const renderHistory = ({ item }) => {
            return (
                <View>
                    <Card>
                        <Card.Title>Exchange History</Card.Title>
                        <Card.Divider />
                        {
                            users.map((this.props.History) => {
                                return (
                                    <View key={ } style={styles.users}>

                        </View>
                                );
                            });

                            users.map((u, i) => {
                                return (
                                    <View key={i} style={styles.user}>
                            <Text style={styles.name}>{u.name}</Text>
                        </View>
                                )
                            }
                        }
                    </Card>
                </View>
            )
        }

        if (this.props.logged) {
            return (
                <ScrollView>
                    <View>
                        <Text style={{ fontSize: 40 }}>Exchange History</Text>
                        <FlatList
                            data={this.props.history.history}
                            renderItem={ }
            </View>
            
        </ScrollView>
            )
        }

    }


}

export default connect(mapStateToProps)(History);