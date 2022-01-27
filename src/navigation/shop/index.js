import { COLORS } from '../utils/constants/colors';
import Categories from '../screens/categories/index';
import { NavigationContainer } from '@react-navigation/native';
import { Platform } from 'react-native';
import ProductDetail from '../screens/product-detail/index';
import Products from '../screens/products/index';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Categories'
                screenOptions={{
                    headerStyle: {
                        backgroundColor: Platform.OS === 'android' ? COLORS.primary : '#f4511e',
                    },
                    headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.primary,
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}>
                <Stack.Screen name='Categories' component={Categories} options={{ title: 'Categorías' }} />
                <Stack.Screen
                    name='Products'
                    component={Products}
                    options={({ route }) => ({ 
                        title: route.params.name, 
                        headerTitleAlign: 'center',
                        headerStyle: { backgroundColor: route.params.color } })}
                />
                <Stack.Screen 
                name='ProductDetail' 
                component={ProductDetail} 
                options={({ route }) => ({
                    title: route.params.name,
                })} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation;
