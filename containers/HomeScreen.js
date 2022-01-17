import React from 'react';
import { StyleSheet, View, Text, SafeAreaView  } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AllHomeScreen from './AllHomeScreen';
import MoviesScreen from './MoviesScreen';
import TvScreen from './TvScreen';
import PeopleScreen from './PeopleScreen';

const Tab = createMaterialTopTabNavigator();

export default HomeScreen = () => {
    return (
        <Tab.Navigator
            style={{backgroundColor: '#13012c' }}
            screenOptions={({ route }) => ({
                tabBarStyle: { 
                    backgroundColor: '#13012c',
                },
                tabBarIndicatorStyle: { 
                    backgroundColor: 'transparent', 
                },
                tabBarLabel: ({focused}) => {
                    // define the style for the navbar item
                    const style = {
                        color: '#fff', 
                        borderWidth: 1, 
                        borderColor: '#fff',
                        borderRadius: 50,
                        paddingHorizontal: 14,
                        paddingTop: 2,
                        paddingBottom: 1,
                        fontSize: 12,
                        textAlign: 'center',
                        backgroundColor: focused ? '#6b059e' : '#13012c'
                    }
                    return <Text style={style}>{route.name}</Text>;
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


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#13012c',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  