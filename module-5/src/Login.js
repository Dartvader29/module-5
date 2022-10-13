//import liraries
import React, { useState, Component } from 'react';
import { View, Dimensions, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
// create a component
const Login = ({ navigation }) => {
 
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

    return (
        <SafeAreaView>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Email/Username"
                    value ={email}
                    name = 'email'
                    onChange = {(email) => {setEmail(email)}}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value ={password}
                    name = 'password'
                    onChange = {(password) => {setPassword(password)}}
                />
            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Dashboard')}
            >
                <Text style={{ color: 'white' }}>Login</Text>
            </TouchableOpacity>
        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    form: {
        flex: 1,

    },
    input: {
        height: 40,
        margin: 12,
        borderBottomWidth: 1,
        padding: 10,
    },
    button: {

        backgroundColor: "#00cfea",
        padding: 10,
        margin: 10,
        borderRadius: 10,


    },
    form: {
        margin: 16,
        paddingTop: windowHeight / 5


    }


});

//make this component available to the app
export default Login;
