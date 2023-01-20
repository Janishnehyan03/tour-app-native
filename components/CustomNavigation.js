import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from '../screens/Login'

const Stack = createNativeStackNavigator();

import React from 'react'

function CustomNavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}/>
    </Stack.Navigator>
  )
}

export default CustomNavigation