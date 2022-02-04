import { Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react'
import styles from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';

const OrderItem = ({ item, onDelete }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.date}>{item.date}</Text>
            </View>
            <View style={styles.detail}>
                <Text >$ {item.total}</Text>
                <TouchableOpacity onPress={() => onDelete(item.id)}>
                    <Ionicons name="trash-outline" size={24} color="#ff0000" onPress={() => onDelete(item.id)}/>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default OrderItem;
