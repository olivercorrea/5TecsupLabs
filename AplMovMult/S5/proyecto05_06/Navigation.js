import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './Screens/HomeScreen';
import SettingsScreen from './Screens/SettingsScreen';
import StackScreen from './Screens/StackScreen';

const Tab = createBottomTabNavigator();
const HomeSatckNavigator = createNativeStackNavigator();
const Stack = createStackNavigator();

function MyStack() {
    return(
        <HomeSatckNavigator.Navigator
           initialRouteName="HomeScreen"
        >
            <HomeSatckNavigator.Screen
                name="HomeScreen"
                component={HomeScreen}
            />
            <HomeSatckNavigator.Screen
                name="Stack"
                component={StackScreen}
            />
        </HomeSatckNavigator.Navigator>
    )
}

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: 'purple',
            }}
        >
            <Tab.Screen
                name="Home"
                component={MyStack}
                options={{
                    tabBarLabel: 'Inicio',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="home"
                            color={color}
                            size={size}
                        />
                    ),
                    tabBarBadge: 3,
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    tabBarLabel: 'Ajustes',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="brightness-5"
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}