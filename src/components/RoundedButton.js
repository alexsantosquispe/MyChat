import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { GlobalStyles } from '../styles'

const RoundedButton = ({
  title,
  onPressHandler,
  disabled = false,
  type = 'default',
  widthButton = '100%'
}) => {
  const buttonStyle = disabled
    ? GlobalStyles.buttonDisabled
    : GlobalStyles.button

  return type === 'outline' ? (
    <TouchableOpacity
      style={[
        GlobalStyles.baseButton,
        GlobalStyles.outline,
        { width: widthButton }
      ]}
      onPress={onPressHandler}
      disabled={disabled}>
      <Text style={GlobalStyles.flatTitle}>{title}</Text>
    </TouchableOpacity>
  ) : type === 'flat' ? (
    <TouchableOpacity
      style={[
        GlobalStyles.baseButton,
        GlobalStyles.flat,
        { width: widthButton }
      ]}
      onPress={onPressHandler}
      disabled={disabled}>
      <Text style={GlobalStyles.flatTitle}>{title}</Text>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      style={[GlobalStyles.baseButton, buttonStyle, { width: widthButton }]}
      onPress={onPressHandler}
      disabled={disabled}>
      <Text style={GlobalStyles.buttonTitle}>{title}</Text>
    </TouchableOpacity>
  )
}

export default RoundedButton
