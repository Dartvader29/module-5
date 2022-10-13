
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, FlatList, Dimensions, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import serviceData from './Data';
import Details from './Details';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Stack = createNativeStackNavigator();
// create a component
const Function = ({ navigation }) => {
    return (
        <SafeAreaView>
            
            <FlatList
            data={serviceData}
            contentInset = {{padding:12}}
            renderItem ={({item}) =>{
              return(
                <TouchableOpacity onPress={() => navigation.navigate('Details')}style ={{margin:20, height:windowHeight * 0.2, backgroundColor:item.bgColor, borderRadius:15}}>
                <View style ={{backgroundColor:item.bgColor}}>
                <Text style = {styles.name}>
                {item.name}
                </Text>
                <Text style = {styles.category}>
                {item.category}
                </Text>
                <Text style = {styles.numberCompany}>
                {item.numberCompany}
                </Text>
                
               
              
                </View>
                <Image style = {{
                  height:90, width:180, position:'absolute', right:0, margin:10, bottom:0
                  
                }} source={item.image}/>
                </TouchableOpacity>
                
              )
            }}
            >

          </FlatList>
            
        </SafeAreaView>

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
    },
    category:{
      fontSize:26,
      fontWeight:'300'
    },
    name:{
fontSize:30,
fontWeight:'300'

    }
});

//make this component available to the app
export default Function;
