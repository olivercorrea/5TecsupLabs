// Navigation.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './Screens/HomeScreen';
import SettingsScreen from './Screens/SettingsScreen';
import StackScreen from './Screens/StackScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: 'Inicio' }}
            />
            <Stack.Screen
                name="Stack"
                component={StackScreen}
                options={{ title: 'Lista' }}
            />
        </Stack.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size }) => {
                        let iconName;

                        if (route.name === 'Bienvenido') {
                            iconName = 'coffee';
                        } else if (route.name === 'Precios') {
                            iconName = 'store';
                        }

                        return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
                    },
                })}
            >
                <Tab.Screen
                    name="Bienvenido"
                    component={MyStack}
                    options={{ tabBarLabel: 'Inicio' }}
                />
                <Tab.Screen
                    name="Precios"
                    component={SettingsScreen}
                    options={{ tabBarLabel: 'Tienda' }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
