import { Button, SafeAreaView, Text, View } from 'react-native';

import { CATEGORIES } from '../../utils/data/categories';
import CategoryItem from '../../components/categories-item/index';
import { FlatList } from 'react-native-gesture-handler';
import React from 'react'
import styles from './style'

const index = ({ navigation }) => {
  const handleSelectedCategory = (item) => {
    navigation.navigate('Products', { categoryId: item.id, name: item.title, color: item.color });
  }

  const renderCategories = ({ item }) => {
    return (
      <CategoryItem item={item} onSelected={handleSelectedCategory} />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          data={CATEGORIES}
          renderItem={renderCategories}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default index;
