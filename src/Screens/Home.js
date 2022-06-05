import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer'; //For Drawer Navigation
import Logout from './Logout'
import Profile from './Profile'
import HomeScreen from './HomeScreen';
import Icon from 'react-native-vector-icons/FontAwesome'; //For Using Icons
import { LogBox } from 'react-native'; //Used to ignore warnings

const Drawer=createDrawerNavigator();

function Home({navigation})
{
    LogBox.ignoreAllLogs(); //Ignores all the warning on the Screen

    return(
        
            <Drawer.Navigator
            screenOptions={({ route }) => ({
               //Used for drawer Icons
                drawerIcon: ({ focused, size, color }) => {
                  let iconName;
                  if (route.name === 'Home') 
                  {
                    iconName = 'twitter';
                    size = focused ? 25 : 20;
                    color = focused ? 'red' : '#555';
                  } 
                  else if (route.name === 'Profile')
                  {
                    iconName = 'vcard';
                    size = focused ? 25 : 20;
                    color = focused ? 'red' : '#555';
                  }
                  else if (route.name === 'Logout')
                  {
                    iconName = 'sign-out';
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
                initialRouteName='Home'
            >
                <Drawer.Screen name='Home' component={HomeScreen} options={{title:'Home'}}/>
                <Drawer.Screen name='Profile' component={Profile} options={{title:'Profile'}}/>
                <Drawer.Screen name='Logout' component={Logout} options={{title:'Logout',headerShown:false}}/>
            </Drawer.Navigator>
        
    )
}

export default Home;