import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen, SignUpScreen } from '../screens'
import { CONTACTS, HOME, LOGIN, SIGNUP, SETTINGS } from './RoutesNames'

const Stack = createStackNavigator()

// This Stack will be displayed after login's success
const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName={HOME}>
      <Stack.Screen name={HOME} component={HomeScreen} />
      <Stack.Screen name={CONTACTS} component={ContactsScreen} />
      <Stack.Screen name={SETTINGS} component={SettingsScreen} />
    </Stack.Navigator>
  )
}

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName={LOGIN} headerMode={false}>
      <Stack.Screen name={LOGIN} component={LoginScreen} />
      <Stack.Screen name={SIGNUP} component={SignUpScreen} />
      <Stack.Screen name={HOME} component={HomeStack} />
    </Stack.Navigator>
  )
}

export default MainStack
