import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [name, setName] = useState('Alpha');
  const [age, setAge] = useState(30);

  return (
    <View style={styles.container}>
      <Text>Enter Name:</Text>
      <TextInput
      placeholder='e.g. Beta'
      style={styles.input}
      onChangeText={(newName) => setName(newName)} />
      <Text>Enter Age:</Text>
      <TextInput
      keyboardType='numeric'
      placeholder='e.g. Beta'
      style={styles.input}
      onChangeText={(newAge) => setAge(newAge)} />
      <Text>Name: {name}, Age: {age}</Text>
      <StatusBar style="auto" />
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
  input: {
    margin: 20,
    borderWidth: 1,
    width: 200,
    padding: 8
  }
});
