import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import changeNavigationBarColor from 'react-native-navigation-bar-color'
import { Colors, GlobalStyles } from '../styles'

changeNavigationBarColor(Colors.lightBg, true)

const HomeScreen = () => {
  return (
    <View style={GlobalStyles.container}>
      <StatusBar backgroundColor={Colors.lightBg} barStyle="dark-content" />
      <Text>Home Screen</Text>
    </View>
  )
}

export default HomeScreen
