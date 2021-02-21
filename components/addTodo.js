import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default function AddTodo({ onAddNewTodoHandler }) {

    const [text, setText] = useState('');

    const inputChangeHandler = (newTodo) => {
        setText(newTodo);
    }

    return (
        <View>
            <TextInput
                placeholder="Add new todo"
                style={styles.input}
                onChangeText={inputChangeHandler}
            />
            <Button
                title="Add new todo"
                color="#023e8a"
                onPress={() => onAddNewTodoHandler(text)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#023e8a',
        marginVertical: 10,
        paddingHorizontal: 20,
    }
});