import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import addTaskInput from '../screens/addTaskInput';

const Stack = createStackNavigator();

export default function StackNavigator(){
    return(
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="AddTask" component={addTaskInput} />
        </Stack.Navigator>
    )
}