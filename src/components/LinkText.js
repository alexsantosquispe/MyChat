import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { GlobalStyles } from '../styles'

const LinkText = ({ label, onPressHandler }) => {
  return (
    <TouchableOpacity
      onPress={onPressHandler}
      style={GlobalStyles.linkContainer}>
      <Text style={GlobalStyles.linkText}>{label}</Text>
    </TouchableOpacity>
  )
}

export default LinkText
