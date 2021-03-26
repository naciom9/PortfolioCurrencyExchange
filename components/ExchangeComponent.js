import React, { Component } from 'react';
import {
    View, Text, ScrollView,
    StyleSheet, TextInput, Picker, Button, Image
} from 'react-native';


class Exchange extends Component {

    constructor(props) {
        super(props);

        this.state = {
            input: 1,
            fromCurrency: 'USD',
            toCurrency: 'RUB',
            original: 10,
            converted: null

        };
    }

    onConvert = () => {
        fetch(`https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=${this.state.fromCurrency}&to=${this.state.toCurrency}&amount=${this.state.input}`, {
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
            })
            .catch(err => {
                console.error(err);
            });
    }

    componentDidMount() {
        // Fetch code on Load to return the list of available currencies goes here
        console.log("component", this);
        this.onConvert()
            .then(userdata => {
                const fecthedData = JSON.parse(userdata);
                if (fecthedData) {
                    this.setState({ fromCurrency: fecthedData.fromCurrency });
                    this.setState({ toCurrency: fecthedData.toCurrency })
                }
            });
    }

    static navigationOptions = {
        title: 'Exchange'
    }

    render() {

        return (
            // <Animatable.View animation='lightSpeedIn' duration={1000}>
            <ScrollView>
                {/* <View style={styles.imageContainer}>
                    <Image
                        source={require('./images/money-changer-logo.jpg')}
                        style={styles.image}
                    />
                </View> */}
                <View style={styles.container}>
                    <View>
                        <TextInput value={this.state.input} onChangeText={input => this.setState({ input })} placeholder="Input amount" />
                    </View>
                    <View>
                        <Text style={styles.text}>From:</Text>
                        <Picker selectedValue={this.state.fromCurrency} onValueChange={fromCurrency => this.setState({ fromCurrency })}>
                            <Picker.Item label="USD" value="USD" />
                            <Picker.Item label="CAD" value="CAD" />
                            <Picker.Item label="RUB" value="RUB" />

                        </Picker>
                        <Text style={styles.text}>To:</Text>
                        <Picker selectedValue={this.state.toCurrency} onValueChange={toCurrency => this.setState({ toCurrency })}>
                            <Picker.Item label="USD" value="USD" />
                            <Picker.Item label="CAD" value="CAD" />
                            <Picker.Item label="RUB" value="RUB" />

                        </Picker>
                    </View>
                    <View>
                        <Button title="Convert" onPress={this.onConvert} />
                    </View>
                    {this.state.converted != null &&
                        <Text> Converted amount is {this.state.converted}</Text>
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
        backgroundColor: '#0bf',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#000',
        fontSize: 15,
        fontWeight: 'bold',
        width: 100,
        marginBottom: -50
    },
});
const typography = StyleSheet.create({
    header: {
        color: '#61dafb',
        fontSize: 25,
        marginBottom: 20
    },
    imageContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        margin: 10
    },
    image: {
        width: 60,
        height: 60
    }
});

export default Exchange;