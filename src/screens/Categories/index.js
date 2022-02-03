import { Button, SafeAreaView, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import CategoryItem from '../../components/categories-item/index';
import { FlatList } from 'react-native-gesture-handler';
import React from 'react'
import { selectCategory } from '../../store/action/category.action';
import styles from './style'

const index = ({ navigation }) => {
  const categories = useSelector(state => state.categories.categories);
  const dispatch = useDispatch();
  
  const handleSelectedCategory = (item) => {
    dispatch(selectCategory(item.id));
    navigation.navigate('Products', {  name: item.title, color: item.color});
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
          data={categories}
          renderItem={renderCategories}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default index;
