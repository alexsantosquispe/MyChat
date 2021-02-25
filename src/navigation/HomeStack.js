import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen, ContactsScreen, SettingsScreen } from '../screens'
import { HOME, CONTACTS, SETTINGS } from './RoutesNames'

const Stack = createStackNavigator()

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName={HOME}>
      <Stack.Screen name={HOME} component={HomeScreen} />
      <Stack.Screen name={CONTACTS} component={ContactsScreen} />
      <Stack.Screen name={SETTINGS} component={SettingsScreen} />
    </Stack.Navigator>
  )
}

export default HomeStack
