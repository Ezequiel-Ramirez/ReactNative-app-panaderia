import { Text, TouchableOpacity, View } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react'
import styles from './style';

const CartItem = ({ item, onDelete }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.name}>{item.name}</Text>
            </View>
            <View style={styles.detail}>
                <Text >Cantidad: {item.quantity}</Text>
                <Text >$ {item.price}</Text>
                <TouchableOpacity onPress={() => onDelete(item.id)}>
                    <Ionicons name="ios-trash" size={20} color="red" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CartItem;
