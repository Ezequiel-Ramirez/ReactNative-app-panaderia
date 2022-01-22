import { Button, SafeAreaView, Text, View } from 'react-native';

import React from 'react'
import styles from './style'

const index = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text>Categories</Text>
        <Button title="Go to Products" onPress={() => navigation.navigate('Products')} />
      </View>
    </SafeAreaView>
  );
};

export default index;
