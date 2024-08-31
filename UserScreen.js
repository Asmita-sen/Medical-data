import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Picker } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    const loadRoles = async () => {
      try {
        const rolesData = await AsyncStorage.getItem('roles');
        if (rolesData) setRoles(JSON.parse(rolesData));
      } catch (error) {
        console.error(error);
      }
    };

    loadRoles();
  }, []);

  const addUser = async () => {
    try {
      const usersData = await AsyncStorage.getItem('users');
      const users = usersData ? JSON.parse(usersData) : [];
      const newUser = { userID: users.length + 1, username, password, email, role };
      users.push(newUser);
      await AsyncStorage.setItem('users', JSON.stringify(users));
      alert('User added successfully');
      setUsername('');
      setPassword('');
      setEmail('');
      setRole('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Add User</Text>
      <TextInput placeholder="Username" value={username} onChangeText={setUsername} />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <Picker selectedValue={role} onValueChange={setRole}>
        {roles.map(role => (
          <Picker.Item key={role.roleID} label={role.roleName} value={role.roleID} />
        ))}
      </Picker>
      <Button title="Add User" onPress={addUser} />
    </View>
  );
};

export default UserScreen;
