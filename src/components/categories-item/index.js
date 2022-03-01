import { Text, TouchableOpacity, View, ImageBackground } from 'react-native';

import React from 'react'
import styles from './style';


const index = ({ item, onSelected }) => {
    const image = item.img;
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.containerTouchable}
                onPress={() => onSelected(item)}>
                <ImageBackground source={require('../../../assets/harinaIntegral.png')} style={styles.containerImage}>
                    <Text style={styles.title}>{item.title}</Text>
                </ImageBackground>
            </TouchableOpacity>
        </View>
    );
};

export default index;
