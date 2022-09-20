import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';  
import { Provider } from 'react-redux' 
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './components/redux/reducers/rootReducer'

//imported modules from local file
import Landing from './components/auth/landing';
import Register from './components/auth/register';
import Login from './components/auth/login';
import Dashboard from './components/auth/dashboard';

const Stack = createNativeStackNavigator();
  
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Landing'>
        <Stack.Screen name="Artisan" component={Landing} options={{headerShown: false}} />
        <Stack.Screen name="Register" component={Register} options={{headerShown: true}} />
        <Stack.Screen name="Login" component={Login} options={{headerShown: true}} />
        <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App
