import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Feather'
import {
  ContactsScreen,
  EditProfileScreen,
  HomeScreen,
  ProfileScreen,
  SettingsScreen
} from '../screens'
import { HOME, CONTACTS, PROFILE, EDIT_PROFILE, SETTINGS } from './RoutesNames'
import { Colors } from '../styles'

const Stack = createStackNavigator()
const Tabs = createBottomTabNavigator()

const HomeTab = () => {
  return (
    <Tabs.Navigator
      initialRouteName={CONTACTS}
      tabBarOptions={{
        activeTintColor: Colors.primaryColor,
        inactiveTintColor: Colors.inactiveColor,
        labelStyle: {
          fontSize: 12.5,
          fontFamily: 'Nunito-Bold'
        }
      }}>
      <Tabs.Screen
        name={'Chat'}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="message-circle" color={color} size={26} />
          )
        }}
      />
      <Tabs.Screen
        name={CONTACTS}
        component={ContactsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="book" color={color} size={26} />
          )
        }}
      />
      <Tabs.Screen
        name={PROFILE}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="user" color={color} size={26} />
          )
        }}
      />
    </Tabs.Navigator>
  )
}

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName={HOME}>
      <Stack.Screen
        name={HOME}
        component={HomeTab}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={SETTINGS} component={SettingsScreen} />
      <Stack.Screen name={EDIT_PROFILE} component={EditProfileScreen} />
    </Stack.Navigator>
  )
}
export default HomeStack
