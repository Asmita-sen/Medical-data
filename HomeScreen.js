import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Healthcare Management App</Text>
      <Button title="Manage Users" onPress={() => navigation.navigate('User')} />
      <Button title="Manage Roles" onPress={() => navigation.navigate('Role')} />
      <Button title="Manage Hospitals" onPress={() => navigation.navigate('Hospital')} />
      {/* Add buttons for other entities */}
    </View>
  );
};

export default HomeScreen;
