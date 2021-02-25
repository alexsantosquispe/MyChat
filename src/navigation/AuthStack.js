import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen, SignUpScreen } from '../screens'
import { LOGIN, SIGNUP } from './RoutesNames'

const Stack = createStackNavigator()

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName={LOGIN} headerMode={false}>
      <Stack.Screen name={LOGIN} component={LoginScreen} />
      <Stack.Screen name={SIGNUP} component={SignUpScreen} />
    </Stack.Navigator>
  )
}

export default AuthStack
