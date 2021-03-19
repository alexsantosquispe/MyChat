import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome5'
import {
  ContactsScreen,
  EditProfileScreen,
  HomeScreen,
  NewConversation,
  ProfileScreen,
  SettingsScreen
} from '../screens'
import {
  HOME,
  CHAT,
  CONTACTS,
  PROFILE,
  EDIT_PROFILE,
  SETTINGS,
  NEW_CHAT
} from './RoutesNames'
import { Colors } from '../styles'

const Stack = createStackNavigator()
const Tabs = createBottomTabNavigator()

const HomeTab = () => {
  return (
    <Tabs.Navigator
      initialRouteName={CHAT}
      tabBarOptions={{
        activeTintColor: Colors.primaryColor,
        inactiveTintColor: Colors.inactiveColor,
        labelStyle: {
          fontSize: 12.5,
          fontFamily: 'Nunito-Bold'
        }
      }}>
      <Tabs.Screen
        name={CHAT}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Icon name="comments" color={color} size={25} solid={focused} />
          )
        }}
      />
      <Tabs.Screen
        name={CONTACTS}
        component={ContactsScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Icon name="address-book" color={color} size={25} solid={focused} />
          )
        }}
      />
      <Tabs.Screen
        name={PROFILE}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Icon name="user" color={color} size={25} solid={focused} />
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
      <Stack.Screen name={NEW_CHAT} component={NewConversation} />
      <Stack.Screen name={SETTINGS} component={SettingsScreen} />
      <Stack.Screen name={EDIT_PROFILE} component={EditProfileScreen} />
    </Stack.Navigator>
  )
}
export default HomeStack
