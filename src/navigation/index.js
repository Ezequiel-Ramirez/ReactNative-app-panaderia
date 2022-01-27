import CartStackNavigation from './cart';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import ShopStackNavigation from './shop';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const BottomTabs = createBottomTabNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer>
           <BottomTabs.Navigator initialRouteName='Shop'>
                <BottomTabs.Screen name='Shop' component={ShopStackNavigation} />
                <BottomTabs.Screen name='Cart' component={CartStackNavigation} />
           </BottomTabs.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation;
