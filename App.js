import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/Screens/Home'
import Login from './src/Screens/Login'
import Signup from './src/Screens/Signup'
import { Provider } from 'react-redux';
import {Store} from './src/Redux/stores';

const Stack=createStackNavigator();

function App(){
  return(
  <Provider store={Store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
        <Stack.Screen name='Signup' component={Signup} options={{headerShown:false}}/>
        <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
  )
} 

export default App;