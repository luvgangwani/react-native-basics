import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [name, setName] = useState('Alpha');
  const [person, setPerson] = useState({ name: 'Gamma', age: 40 });

  const handleUpdateStatusClick = () => {
    setName('Beta');
    setPerson({
      name: 'Delta',
      age: 45,
    });
  };

  return (
    <View style={styles.container}>
      <Text>My name is {name}.</Text>
      <Text>His name is {person.name} and his age is {person.age}.</Text>
      <View style={styles.buttonContainer}>
        <Button title="Update State" onPress={handleUpdateStatusClick}/>
      </View>
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
  buttonContainer: {
    marginTop: 20,
  }
});
