import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    {name: 'Alpha', key: 1},
    {name: 'Beta', key: 2},
    {name: 'Gamma', key: 3},
    {name: 'Delta', key: 4},
    {name: 'Epsilon', key: 5},
    {name: 'Zeta', key: 6},
    {name: 'Eta', key: 7},
    {name: 'Theta', key: 8},
    {name: 'Iota', key: 9},
    {name: 'Kappa', key: 10},
  ]);

  return (
    <View style={styles.container}>
      <ScrollView>
        {
          people.map((eachPerson) => (
            <View style={styles.eachPerson} key={eachPerson.key}>
              <Text>{eachPerson.name}</Text>
            </View>
          ))
        }
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  eachPerson: {
    backgroundColor: '#0096c7',
    marginVertical: 12, 
    padding: 30,
    fontSize: 24
  },
});
