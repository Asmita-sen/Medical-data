import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import UserScreen from './components/UserScreen';
import RoleScreen from './components/RoleScreen';
import HospitalScreen from './components/HospitalScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="User" component={UserScreen} />
        <Stack.Screen name="Role" component={RoleScreen} />
        <Stack.Screen name="Hospital" component={HospitalScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
