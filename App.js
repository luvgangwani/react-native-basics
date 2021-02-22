import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, FlatList, Keyboard, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import AddTodo from './components/addTodo';
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

  const addNewTodoHandler = (newTodo) => {
    if(newTodo.length > 3) {
      setTodos((prevTodos) => ([
      ...prevTodos,
      {text: newTodo, key: Math.random().toString()}
      ]));
      Keyboard.dismiss();
    }
    else {
      Alert.alert(
        'Yo!',
        'The task item must be more than 3 characters',
        [
          { text: 'Cool', onPress: () => console.log('Alert closed.')}
        ]
        );
    }
    
  }

  return (
    <TouchableWithoutFeedback onPress={ () => { Keyboard.dismiss() } }>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo onAddNewTodoHandler={addNewTodoHandler} />
          <View style={styles.list}>
            <FlatList 
              data={todos}
              renderItem={({ item }) => <TodoItem item={ item } onPressHandler={pressHandler} />}
            />
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
  }
});
