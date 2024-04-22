import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import UsersList from './screens/UsersList';
import CreteUserScreen from './screens/CreateUserScreen';
import UserDetailScreen from './screens/UserDetailScreen';

const Stack = createStackNavigator()

function MyStack() {
  return(
    <Stack.Navigator>
      <Stack.Screen name="CreteUserScreen" component={CreteUserScreen}/>
      <Stack.Screen name="UsersList" component={UsersList}/>
      <Stack.Screen name="UserDetailScreen" component={UserDetailScreen}/>
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  )
}
