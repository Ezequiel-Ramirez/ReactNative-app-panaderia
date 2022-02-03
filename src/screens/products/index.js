import {
  FlatList,
  SafeAreaView,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import { filterBreads, selectBread } from '../../store/action/bread.action';
import { useDispatch, useSelector } from 'react-redux';

import { BREADS } from '../../utils/data/breads';
import ProductItem from '../../components/products-item/index';
import styles from './style';

const index = ({ navigation, route }) => {
  const dispatch = useDispatch();
  
  const category = useSelector(state => state.categories.selected);
  const categoryBreads = useSelector(state => state.breads.filteredBread);
  const handleSelectedProduct = (item) => {
    dispatch(selectBread(item.id));
    navigation.navigate('ProductDetail',
      {
        name: item.name,
      }
    );
  }

  const renderProducts = ({ item }) => {
    return (
      <ProductItem item={item} onSelected={handleSelectedProduct} />
    )
  }

  useEffect(() => {
    dispatch(filterBreads(category.id));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          data={categoryBreads}
          renderItem={renderProducts}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};


export default index;
