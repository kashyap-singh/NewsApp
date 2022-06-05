import React from 'react';
import Feed from './Feed';
import Favourites from './Favourites';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'; //Used to Create Bottom tab Navigation
import Icon from 'react-native-vector-icons/FontAwesome'; //Used for Navigation Icons
import { LogBox } from 'react-native'; //Ignores Warnings


const Tab=createMaterialBottomTabNavigator()

function HomeScreen({navigation})
{
    LogBox.ignoreAllLogs();
    return(
        <Tab.Navigator 
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, size, color }) => {
              let iconName;
              if (route.name === 'Feed') {
                iconName = 'twitter';
                size = focused ? 25 : 20;
                color = focused ? 'red' : '#555';
              } else if (route.name === 'Favourites') {
                iconName = 'heart';
                size = focused ? 25 : 20;
                color = focused ? 'red' : '#555';
              }
              return (
                <Icon name={iconName} size={size} color={color}/>
              )
            }
            })}
            activeColor='#f0edf6'
            inactiveColor='#3e2465'
            barStyle={{ backgroundColor: '#694fad' }}
            initialRouteName='Feed'
        >
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="Favourites" component={Favourites} />
        </Tab.Navigator>
        

    )
}

export default HomeScreen;