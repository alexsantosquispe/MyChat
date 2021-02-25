import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { GlobalStyles, Resources } from '../styles'
import * as Res from '../styles/Resources'

const SocialButton = ({ title, type, onPressHandler }) => {
  const iconPath = type ? Res[type] : Res.google

  return (
    <TouchableOpacity onPress={() => {}} style={GlobalStyles.outLineButton}>
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
