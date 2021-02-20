import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Header View</Text>
      </View>
      <View style={styles.body}>
        <Text>Et velit adipisicing consectetur Lorem amet exercitation sunt in qui ex incididunt.</Text>
        <Text>Nisi officia tempor minim deserunt nulla reprehenderit laborum laborum do excepteur cillum enim.</Text>
        <Text style={styles.boldText}>Styles are not inherited from View to Text but are inherited from <Text>Text to Text</Text></Text>
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
  header: {
    backgroundColor: '#23E76A',
    padding: 20,
    color: '#000000',
  },
  boldText: {
    fontWeight: 'bold',
  },
  body: {
    backgroundColor: '#56EEF4',
    padding: 40,
    color: '#000000',
  },
});
