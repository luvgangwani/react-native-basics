import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function TodoItem({ item, onPressHandler }) {
    return (
        <TouchableOpacity onPress={() => onPressHandler(item.key)}>
            <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    item: {
        padding: 25,
        margin: 10,
        borderColor: '#023e8a',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 10,
        color: '#023e8a',
    }
})