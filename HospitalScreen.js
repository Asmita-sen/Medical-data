import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Picker } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HospitalScreen = () => {
  const [hospitalName, setHospitalName] = useState('');
  const [address, setAddress] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [district, setDistrict] = useState('');
  const [districts, setDistricts] = useState([]);

  useEffect(() => {
    const loadDistricts = async () => {
      try {
        const districtsData = await AsyncStorage.getItem('districts');
        if (districtsData) setDistricts(JSON.parse(districtsData));
      } catch (error) {
        console.error(error);
      }
    };

    loadDistricts();
  }, []);

  const addHospital = async () => {
    try {
      const hospitalsData = await AsyncStorage.getItem('hospitals');
      const hospitals = hospitalsData ? JSON.parse(hospitalsData) : [];
      const newHospital = { hospitalID: hospitals.length + 1, hospitalName, address, contactInfo, district };
      hospitals.push(newHospital);
      await AsyncStorage.setItem('hospitals', JSON.stringify(hospitals));
      alert('Hospital added successfully');
      setHospitalName('');
      setAddress('');
      setContactInfo('');
      setDistrict('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Add Hospital</Text>
      <TextInput placeholder="Hospital Name" value={hospitalName} onChangeText={setHospitalName} />
      <TextInput placeholder="Address" value={address} onChangeText={setAddress} />
      <TextInput placeholder="Contact Info" value={contactInfo} onChangeText={setContactInfo} />
      <Picker selectedValue={district} onValueChange={setDistrict}>
        {districts.map(district => (
          <Picker.Item key={district.districtID} label={district.districtName} value={district.districtID} />
        ))}
      </Picker>
      <Button title="Add Hospital" onPress={addHospital} />
    </View>
  );
};

export default HospitalScreen;
