import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { GlobalStyles } from '../styles'
import * as Resources from '../styles/Resources'

const SocialButton = ({ title, type, onPressHandler }) => {
  const iconPath = type ? Resources[type] : Resources.google

  return (
    <TouchableOpacity
      onPress={onPressHandler}
      style={GlobalStyles.outLineButton}>
      <View style={GlobalStyles.iconContainer}>
        <Image source={iconPath} style={GlobalStyles.outLineButtonIcon} />
      </View>
      <View style={GlobalStyles.titleContainer}>
        <Text style={GlobalStyles.outLineButtonTitle}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default SocialButton
