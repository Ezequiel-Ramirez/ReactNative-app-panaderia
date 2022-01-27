import { Text, TouchableOpacity, View } from 'react-native';

import React from 'react'
import styles from './style';

const index = ({ item, onSelected }) => {
    return (
        <TouchableOpacity style={styles.containerTouchable} onPress={() => onSelected(item)}>
            <View style={styles.container }>
                <View>
                    <Text style={styles.name}>{item.name}</Text>
                </View>
                <View>
                    <Text style={styles.detail}>$ {item.price}</Text>
                    <Text style={styles.detail}>{item.weight}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default index;
