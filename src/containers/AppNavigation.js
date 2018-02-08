import LoginScreen from '../components/LoginScreen';
import HomeScreen from '../components/HomeScreen';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import LogoutScreen from '../components/LogoutScreen';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import React from 'react'
import StackoverflowScreen from '../components/StackoverflowScreen';


export default StackNavigator({
    Login: {
        screen: LoginScreen, navigationOptions: {
            header: false,
        }
    },
    Drawer: {
        screen: DrawerNavigator({
            Home: {
                screen: HomeScreen,
                navigationOptions: {title: 'Home',}
            },
            StackoverflowScreen: {
                screen: StackoverflowScreen,
                navigationOptions: {title: 'Stackoverflow'},
            },
            Logout: {
                screen: LogoutScreen,
                navigationOptions: {title: 'Log Out',}
            },
        })
    }
}, {
    navigationOptions: ({ navigation }) => {
        return {
            headerLeft: (
                <TouchableOpacity onPress={() => {
                    navigation.navigate('DrawerOpen');
                }}>
                    <Image source={require('../components/images/drawer.icon.png')} style={{ width: 24, height: 24 }} />
                </TouchableOpacity>
            ),
        }   
    }
});
