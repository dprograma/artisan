import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//imported modules from local file
import Landing from './landing';
import Register from './register';
import Login from './login';
import Dashboard from './dashboard';

const Stack = createNativeStackNavigator();

const Artisan = (props) => {
    return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Landing'>
            <Stack.Screen name="Artisan" component={Landing} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={Register} options={{ headerShown: true }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: true }} />
            <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
        </Stack.Navigator>
    </NavigationContainer>
    );
}

export default Artisan