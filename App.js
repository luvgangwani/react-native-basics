import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';

export default function App() {
  const [todos, setTodos] = useState([
    {text: 'buy coffee', key: '1'},
    {text: 'create an app', key: '2'},
    {text: 'play on the switch', key: '3'},
  ])

  const pressHandler = (itemKey) => {
    setTodos((prevTodos) => prevTodos.filter(({ key }) => key != itemKey));
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        {/* todo form */}
        <View style={styles.list}>
          <FlatList 
            data={todos}
            renderItem={({ item }) => <TodoItem item={ item } onPressHandler={pressHandler} />}
          />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20
  }
});
