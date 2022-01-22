import { Text, TouchableOpacity, View } from 'react-native';

import React from 'react'
import styles from './style';

const index = ({ item, onSelected }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.containerTouchable, { backgroundColor: item.color }]}
                onPress={() => onSelected(item)}>

                <View>
                    <Text style={styles.title}>{item.title}</Text>

                </View>
            </TouchableOpacity>
        </View>
    );
};

export default index;
