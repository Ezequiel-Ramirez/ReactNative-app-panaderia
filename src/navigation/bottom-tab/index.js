import CartStackNavigation from '../cart';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import ShopStackNavigation from '../shop';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const BottomTabs = createBottomTabNavigator();

const BottomTabsNavigator = () => {
    return (
  
            <BottomTabs.Navigator initialRouteName='Shop' screenOptions={{
                headerShown: false,
            }} >
                <BottomTabs.Screen
                    name='Shop'
                    component={ShopStackNavigation}
                    options={
                        {
                            tabBarIcon: ({ focused }) => (
                                <Ionicons name='home' size={26} color={focused ? '#f4511e' : 'gray'} />
                            ),
                        }
                    } />
                <BottomTabs.Screen
                    name='Cart'
                    component={CartStackNavigation}
                    options={
                        {
                            tabBarIcon: ({ focused }) => (
                                <Ionicons name='cart' size={26} color={focused ? '#f4511e' : 'gray'} />
                            ),
                        }
                    } />
            </BottomTabs.Navigator>
    
    )
}

export default BottomTabsNavigator;
