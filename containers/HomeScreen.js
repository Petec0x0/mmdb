import React from 'react';
import { StyleSheet, Text  } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AllHomeScreen from './AllHomeScreen';
import MoviesScreen from './MoviesScreen';
import TvScreen from './TvScreen';
import PeopleScreen from './PeopleScreen';

const Tab = createMaterialTopTabNavigator();

export default HomeScreen = () => {
    return (
        <Tab.Navigator
            style={{backgroundColor: '#13002c' }}
            screenOptions={({ route }) => ({
                tabBarStyle: { 
                    backgroundColor: '#13002c',
                },
                tabBarIndicatorStyle: { 
                    backgroundColor: 'transparent', //transparent
                },
                tabBarLabel: ({focused}) => {
                    return (
                        <LinearGradient
                            // Button Linear Gradient
                            colors={focused ? ['#c73361', '#6b059e']: ['#13012c', '#13012c']}
                            end={{ x: 0.8, y: 0.2 }}
                            style={styles.tabBarButton}
                        >
                            <Text style={styles.tabBarText}>{route.name}</Text>
                        </LinearGradient>);
                }
            })}
        >
            <Tab.Screen name="All" component={AllHomeScreen} />
            <Tab.Screen name="Movies" component={MoviesScreen} />
            <Tab.Screen name="TV" component={TvScreen} />
            <Tab.Screen name="People" component={PeopleScreen} />
        </Tab.Navigator>
    )
}

// styles
const styles = StyleSheet.create({
    tabBarText: {
        color: '#fff', 
        paddingHorizontal: 14,
        paddingTop: 3,
        paddingBottom: 3,
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    tabBarButton: {
        borderRadius: 50,
        borderWidth: 1, 
        borderColor: '#fff'
    }
});