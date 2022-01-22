import { SafeAreaView, Text, View } from 'react-native';

import React from 'react';
import styles from './style';

const index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text>Product</Text>
      </View>
    </SafeAreaView>
  );
};

export default index;
