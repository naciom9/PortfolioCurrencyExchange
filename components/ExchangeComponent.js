import React, { Component } from 'react';
import {
    View, Text, ScrollView,
    StyleSheet, TextInput, Picker, Button, Image
} from 'react-native';
import { connect } from 'react-redux';
import { Tile } from 'react-native-elements';
import { addHistory } from '../redux/ActionCreators';


class Exchange extends Component {

    constructor(props) {
        super(props);

        this.state = {
            input: 1,
            fromCurrency: 'USD',
            toCurrency: 'RUB',
            original: 10,
            converted: null,
            currencies: []
        };
    }

    fetchCurrencies = () => {
        return fetch("https://currency-converter5.p.rapidapi.com/currency/list", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "68be52b1b6mshc14b09eed881d8fp1c1f9ajsn952306a98f81",
                "x-rapidapi-host": "currency-converter5.p.rapidapi.com"
            }
        })
            .then(response => response.json())
            .then(response => {
                console.log("response currencies", Object.keys(response.currencies));
                this.setState({ currencies: Object.keys(response.currencies) });
            })
            .catch(err => {
                console.error(err);
            });
    }

    onConvert = () => {
        return fetch(`https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=${this.state.fromCurrency}&to=${this.state.toCurrency}&amount=${this.state.input}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "68be52b1b6mshc14b09eed881d8fp1c1f9ajsn952306a98f81",
                "x-rapidapi-host": "currency-converter5.p.rapidapi.com"
            }
        })
            .then(response => response.json())
            .then(response => {
                console.log(response);
                const toObj = response.rates[this.state.toCurrency];
                this.setState({ converted: toObj["rate_for_amount"] });
                this.props.addHistory({
                    convertedFrom: this.state.fromCurrency,
                    convertedTo: this.state.toCurrency,
                    amount: this.state.input,
                    convertedAmount: toObj["rate_for_amount"]
                });
            })
            .catch(err => {
                console.error(err);
            });
    }

    componentDidMount() {
        console.log("component", this);
        this.fetchCurrencies();
    }

    static navigationOptions = {
        title: 'Exchange'
    }

    render() {

        return (
            // <Animatable.View animation='lightSpeedIn' duration={1000}>
            <ScrollView>
                <View style={styles.imageContainer}>
                    <Tile
                        imageSrc={require('./images/BlackBroker.jpg')}
                        title="24/7 xChange Concierge"
                        contentContainerStyle={{ height: 70 }}
                    />
                </View>
                <View style={styles.container}>
                    <View>
                        <TextInput style={styles.input} value={this.state.input} onChangeText={input => this.setState({ input })} placeholder="Input amount" />
                    </View>
                    <View>
                        <Text style={styles.text}>From:</Text>
                        {this.state.currencies &&
                            <Picker selectedValue={this.state.fromCurrency} onValueChange={fromCurrency => this.setState({ fromCurrency })}>
                                {this.state.currencies.map(cur => <Picker.Item key={cur} label={cur} value={cur} />)}
                            </Picker>
                        }
                        <Text style={styles.text}>To:</Text>
                        <Picker selectedValue={this.state.toCurrency} onValueChange={toCurrency => this.setState({ toCurrency })}>
                            {this.state.currencies.map(cur => <Picker.Item key={cur} label={cur} value={cur} />)}
                        </Picker>
                    </View>
                    <View>
                        <Button title="Convert" onPress={this.onConvert} />
                    </View>
                    {this.state.converted != null &&
                        <Text style={styles.converted}> Converted amount is: {this.state.converted}</Text>
                    }
                </View>
            </ScrollView>
            // </Animatable.View> 

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 50,
        backgroundColor: '#A6E4EB',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 20,
        fontSize: 16,
        width: 200,
        height: 30,
        textAlign: 'center'
    },
    text: {
        color: '#000',
        fontSize: 15,
        fontWeight: 'bold',
        width: 100,
        height: 40,
        marginBottom: -50
    },
    converted: {
        marginBottom: 20,
        fontWeight: 'bold',
        fontSize: 14,
        height: 40,
        textAlign: 'center'
    },
    header: {
        color: '#61dafb',
        fontSize: 25,
        marginBottom: 20
    },
    imageContainer: {
        flex: 1,
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        margin: 10
    },
    image: {
        width: 80,
        height: 80
    }
});

const mapDispatchToProps = {
    addHistory
};

export default connect(null, mapDispatchToProps)(Exchange);