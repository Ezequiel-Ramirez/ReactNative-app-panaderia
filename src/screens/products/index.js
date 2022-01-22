import { Button, SafeAreaView, Text, View } from 'react-native';

import React from 'react';
import styles from './style';

const index = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text>Product</Text>
        <Button title="Detalle" onPress={() => navigation.navigate('ProductDetail')} />
      </View>
    </SafeAreaView>
  );
};

export default index;
