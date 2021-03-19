import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import changeNavigationBarColor from 'react-native-navigation-bar-color'
import { BaseContactsList } from '../components'
import { Colors, GlobalStyles } from '../styles'

changeNavigationBarColor(Colors.lightBg, true)

const ContactsScreen = () => {
  return (
    <View style={GlobalStyles.subContainer}>
      <StatusBar backgroundColor={Colors.statusBar} barStyle="dark-content" />
      <Text style={GlobalStyles.bigTitle}>Contacts</Text>
      <BaseContactsList />
    </View>
  )
}

export default ContactsScreen
