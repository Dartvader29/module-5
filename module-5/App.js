import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from './src/Dashboard/Dashboard';
import Function from './src/Function';
import Details from './src/Details';
import * as firebase from 'firebase';
import firebaseConfig from './src/firebaseConfig';
import SignIn from './src/SignIn';
import {} from 'firebase'

const Stack = createNativeStackNavigator();
export default function App() {

  if (!firebase.app.length){
    console.log("Firebase is connected");
    firebase.initializeApp(firebaseConfig);
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name = "SignIn" component = {SignIn} />
        <Stack.Screen name = "Login" component = {Login} options={{headerShown:false}}/>
        <Stack.Screen name = "Dashboard" component = {Dashboard} />
        <Stack.Screen name = "Function" component = {Function} />
        <Stack.Screen name = "Details" component = {Details} options={{title:"Service Page"}}/>
     </Stack.Navigator></NavigationContainer>
  );
}



export function initializeApp(firebaseConfig: { apiKey: string; authDomain: string; projectId: string; storageBucket: string; messagingSenderId: string; appId: string; }) {
throw new Error('Function not implemented.');
}


