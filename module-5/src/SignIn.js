import React, {useState} from 'react';
import { View, Dimensions, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import {registration} from './Backend/Authentication';
//import { Container } from './styles';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SignIn = ({navigation}) => {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const signUser = ()=> {

    registration(email,password,name,surname)
  }
  return (
 <SafeAreaView>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Name"
                    value ={name}
                    name = 'name'
                    onChange = {(name) => {setName(name)}}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Surname"
                    value ={surname}
                    name = 'surname'
                    onChange = {(surname) => {setSurname(surname)}}
                />
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
                  <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Login')}
            >
                <Text style={{ color: 'white' }}>Login</Text>
            </TouchableOpacity>
            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={signUser}
            >
                <Text style={{ color: 'white' }}>Sign Up</Text>
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

export default SignIn;