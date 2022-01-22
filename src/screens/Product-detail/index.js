import { Button, SafeAreaView, Text, View } from 'react-native';

import React from 'react';
import styles from './style';

const index = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text>Product Detail</Text>
        <Button title="Go to Categories" onPress={() => navigation.navigate('Categories')} />
      </View>
    </SafeAreaView>
  );
};

export default index;
