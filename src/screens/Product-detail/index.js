import {
  Button,
  SafeAreaView,
  Text,
  View
} from 'react-native';

import React from 'react';
import styles from './style';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../../store/action/cart.action';

const index = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const bread = useSelector(state => state.breads.selected);

  const handleAddItemCart = () => {
    dispatch(addItem(bread));
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text>{bread.name}</Text>
        <Text>{bread.description}</Text>
        <Text>{bread.weight}</Text>
        <Text>$ {bread.price}</Text>
        <Button title="Agregar al Carrito" onPress={() => handleAddItemCart()} />
      </View>
    </SafeAreaView>
  );
};


export default index;
