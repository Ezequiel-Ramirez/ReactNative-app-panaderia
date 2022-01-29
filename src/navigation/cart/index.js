import { COLORS } from '../../utils/constants/colors';
import Cart from '../../screens/cart/index';
import Orders from '../../screens/orders';
import { Platform } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const CartStackNavigation = () => {
    return (
            <Stack.Navigator initialRouteName='Carrito'
                screenOptions={{
                    headerStyle: {
                        backgroundColor: Platform.OS === 'android' ? COLORS.primary : '#f4511e',
                    },
                    headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.primary,
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            >
                <Stack.Screen name='Carrito' component={Cart}  />
                <Stack.Screen name='Orders' component={Orders}  />
               
            </Stack.Navigator>
    )
}

export default CartStackNavigation;
