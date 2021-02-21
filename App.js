import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// In flat lists items not all the items are loaded at once. They are loaded as we scroll through the list (lazy loading)
// Specify a differently named key property (default is "key", in this case "id") using the keyExtractor prop
// We can adjust the items in grids using the numColumns prop

export default function App() {
  const [people, setPeople] = useState([
    {name: 'Alpha', id: '1'},
    {name: 'Beta', id: '2'},
    {name: 'Gamma', id: '3'},
    {name: 'Delta', id: '4'},
    {name: 'Epsilon', id: '5'},
    {name: 'Zeta', id: '6'},
    {name: 'Eta', id: '7'},
    {name: 'Theta', id: '8'},
    {name: 'Iota', id: '9'},
    {name: 'Kappa', id: '10'},
  ]);

  const pressHandler = (itemId) => {
    setPeople((prevPeople) => prevPeople.filter(({ id }) => id != itemId));
  }

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.eachPerson}>{ item.name }</Text>
          </TouchableOpacity>
        )} />
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
    fontSize: 24,
    marginHorizontal: 20,
  },
});
