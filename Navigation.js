import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';


//screens
import Home from './screens/Home';
import SettingsScreen from './screens/SettingsScreen';
import StackScreen from './screens/StackScreen';


const Tab = createBottomTabNavigator();
const homeStackNavigator = createStackNavigator();

function MyTabs() {
    return ( 
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: "green"
            }}
        >
            <Tab.Screen name='Home' component={MyStack} 
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Icon name="home" size={size} color={color} />
                    ),
                    headerShown: false
                }}
            />
            <Tab.Screen name='SettingsScreen' component={SettingsScreen} 
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Icon name="code-fork" size={size} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    );
}

const MyStack = () => {
    return (
        <homeStackNavigator.Navigator>
            <homeStackNavigator.Screen
            name='HomeScreen'
            component={Home}
            options={{
                headerShown: false
            }}

            />

            <homeStackNavigator.Screen
            name='Stack'
            component={StackScreen}
          
            />
        </homeStackNavigator.Navigator>
    )
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}

