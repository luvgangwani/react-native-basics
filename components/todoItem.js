import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({ item, onPressHandler }) {
    return (
        <TouchableOpacity onPress={() => onPressHandler(item.key)}>
            <View style={styles.item}>
                <MaterialIcons name="delete" color="#f9c74f" size={18} />
                <Text style={styles.itemText}>{item.text}</Text>
            </View>
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
        flexDirection: 'row',
    },

    itemText: {
        marginLeft: 10,
        color: '#023e8a',
    }
})