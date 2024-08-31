import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RoleScreen = () => {
  const [roleName, setRoleName] = useState('');

  const addRole = async () => {
    try {
      const rolesData = await AsyncStorage.getItem('roles');
      const roles = rolesData ? JSON.parse(rolesData) : [];
      const newRole = { roleID: roles.length + 1, roleName };
      roles.push(newRole);
      await AsyncStorage.setItem('roles', JSON.stringify(roles));
      alert('Role added successfully');
      setRoleName('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Add Role</Text>
      <TextInput placeholder="Role Name" value={roleName} onChangeText={setRoleName} />
      <Button title="Add Role" onPress={addRole} />
    </View>
  );
};

export default RoleScreen;
