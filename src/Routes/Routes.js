import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';


import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';



import Home from '../Views/Home';
import Search from '../Views/Search'
import Register from '../Views/Register';
import Details from '../../components/Details';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const Tabs = () =>{
    return(
        <Tab.Navigator
        screenOptions={{ 
            headerShown: false,
            tabBarActiveTintColor: 'rgb(130, 10, 209)',
            tabBarShowLabel: false,
        }}>
            <Tab.Screen name='Home' component={Home} options={{
                tabBarIcon: ({color,size}) => (
                    <Icon name='home' color={color} size={size} />
                )
            }}/>
            <Tab.Screen name='Search' component={Search} options={{
                tabBarIcon: ({color,size}) => (
                    <Icon name='search' color={color} size={size} />
                )
            }}/>
            <Tab.Screen name='Register' component={Register} options={{
                 tabBarIcon: ({color,size}) => (
                    < Feather name='plus' color={color} size={size} />
                )
            }}/>
        </Tab.Navigator>
    )
};

const Routes = () => {
  return (
        <NavigationContainer>
            <StatusBar
        hidden = {false}
        backgroundColor = 'rgb(130, 10, 209)'
        translucent = {false}
        networkActivityIndicatorVisible = {true}
    />
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Home2'component={Tabs} />
        <Stack.Screen name='Details' component={Details} />

    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;