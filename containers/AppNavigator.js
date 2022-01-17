import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialIcons  } from '@expo/vector-icons'; 
import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';
import FavouriteScreen from './FavouriteScreen';

const Tab = createMaterialBottomTabNavigator();

export default AppNavigator = () => {

    return (
        <NavigationContainer>
            <Tab.Navigator 
                labeled={false}
                barStyle={{ backgroundColor: '#13012c' }}
                screenOptions={({ route }) => ({
                    headerShown: false,
                   
                    tabBarIcon: ({ color }) => {
                        let iconName;
            
                        if (route.name === 'Home') {
                            iconName = 'home'
                        } else if (route.name === 'Search') {
                            iconName = 'search';
                        } else if (route.name === 'Favourites'){
                            iconName = 'favorite'
                        }
                        // You can return any component that you like here!
                        return <MaterialIcons name={iconName} size={25} color={color} />;
                    },
            })}>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Search" component={SearchScreen} />
                <Tab.Screen name="Favourites" component={FavouriteScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
