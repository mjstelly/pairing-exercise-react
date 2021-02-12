import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const PersonalInfo = () => {
  const [firstName, setFirstName] = useState('');

  return (
    <View>
      <Text>First Name</Text>
      <TextInput
        onChangeText={(text) => {
          setFirstName(text)
        }}
        value={firstName}
        onBlur={(event) => {
          console.log(event)
        }}
      />
    </View>

  )
}

const FitnessInfo = () =>{
  return (
    <Text>FitnessInfo</Text>
  )
}
const HealthInfo = () =>{
  return (
    <Text>HealthInfo</Text>
  )
}
export default function App() {
  return (
    <View style={styles.container}>
    <PersonalInfo />
    <FitnessInfo />
    <HealthInfo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
