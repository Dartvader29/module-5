
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
// create a component
const Dashboard = ({ navigation }) => {
    return (
        <View style={styles.container}>


            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Function')}
            >
                <Text style={{ color: 'white' }}>Function</Text>
            </TouchableOpacity>
        </View>
    );
};




// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    button: {

        backgroundColor: "#00cfea",
        padding: 10,
        margin: 10,
        borderRadius: 10,
    }
});

//make this component available to the app
export default Dashboard;

