
import React, { Component } from 'react';
import { StyleSheet, View, Button, SafeAreaView, FlatList, Text, Alert, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DATA = [
    {
        id: 1,
        name: '1',
        quantity: 1
    },
    {
        id: 2,
        name: '2',
        quantity: 2
    },
    {
        id: 3,
        name: '3',
        quantity: 3
    },
    {
        id: 4,
        name: '4',
        quantity: 4
    },
    {
        id: 5,
        name: '5',
        quantity: 5
    },
];

export default class FileSystemTest extends Component {

    state = { //object
        text: '',
        name: '',
        quantity: '',
        selectedId: '',
    }

    storeData = async (key, value) => {
        try {
            Alert.alert(JSON.stringify(value));
            await AsyncStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            console.log(e);
        }
    }


    getData = async () => {
        try {
            const storedData = await AsyncStorage.getItem('array');
            return storedData != null ? this.setState({ text: JSON.parse(storedData) }) : null;
        } catch (e) {
            console.log(e);
        }
    }

    setSelectedId = (id) => {
        this.setState.selectedId(id)
    }

    renderItem = ({ item }) => {
        if (item.id === this.setState.selectedId) {
            this.setState.selectedId(item.id);
            this.setState.name(item.name);
            this.setState.quantity(item.quantity);
        }
        return (
            <TouchableOpacity style={styles.list} onPress={() => { Alert.alert("name: " + item.name + "\nquantity: " + item.quantity); }}>
                <View >
                    <Text>
                        {item.id}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    };

    // componentDidMount =()=> {
    //   this.storeData();
    //   this.getData();
    // }

    render() {
        return (
            <View
                style={styles.view}
            >
                <Button
                    title="Write"
                    style={styles.button}
                    onPress={() => { this.storeData('array', DATA); }}
                />
                <Button
                    title="Read"
                    style={styles.button}
                    onPress={() => { this.getData(); }}
                />
                <Button
                    title="Display"
                    style={styles.button}
                    onPress={() => { alert(JSON.stringify(this.state.text)); }}
                />
                <SafeAreaView>
                    <FlatList
                        data={this.state.text}
                        renderItem={this.renderItem}
                        keyExtractor={(item) => item.id.toString()}
                    />
                </SafeAreaView>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    view: {

    },

    button: {

    },

    list: {
        borderWidth: 1,
        padding: 10,
        alignItems: 'center',
    },
});
