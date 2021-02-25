import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { GlobalStyles } from '../styles'

const RoundedButton = ({ title, onPressHandler }) => {
  return (
    <TouchableOpacity style={GlobalStyles.button} onPress={onPressHandler}>
      <Text style={GlobalStyles.buttonTitle}>{title}</Text>
    </TouchableOpacity>
  )
}

export default RoundedButton
