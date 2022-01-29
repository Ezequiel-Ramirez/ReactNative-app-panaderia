import { Text, View } from 'react-native';

import React from 'react'
import styles from './style';

const OrderItem = ({ item }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.date}>{item.date}</Text>
            </View>
            <View style={styles.detail}>
                <Text >$ {item.total}</Text>

            </View>
        </View>
    );
};

export default OrderItem;
