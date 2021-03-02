import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { GlobalStyles } from '../styles'

const RoundedButton = ({ title, onPressHandler, disabled = false }) => {
  const buttonStyle = disabled
    ? GlobalStyles.buttonDisabled
    : GlobalStyles.button
  return (
    <TouchableOpacity
      style={[GlobalStyles.baseButton, buttonStyle]}
      onPress={onPressHandler}
      disabled={disabled}>
      <Text style={GlobalStyles.buttonTitle}>{title}</Text>
    </TouchableOpacity>
  )
}

export default RoundedButton
