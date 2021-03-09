import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Feather'
import { Colors, GlobalStyles } from '../styles'

const InputTextBox = (props) => {
  const {
    icon,
    value,
    placeholder,
    secureTextEntry = false,
    secureIcon = false,
    onChangeHandler,
    isValid = true,
    errorMessage = null,
    keyboardType = 'default'
  } = props

  const [hide, setHide] = useState(false)
  const [secureText, setSecureText] = useState(secureTextEntry)
  const errorStyle = !isValid ? GlobalStyles.inputTextBoxError : {}

  const toggleEyeIcon = () => {
    setHide(!hide)
    setSecureText(hide)
  }

  return (
    <View style={GlobalStyles.inputTextBoxContainer}>
      <View style={[GlobalStyles.inputTextBoxRow, errorStyle]}>
        {icon ? (
          <View style={GlobalStyles.inputTextBoxIcon}>
            {isValid ? (
              <Icon name={icon} size={20} color={Colors.inputTextIcon} />
            ) : (
              <Icon name={icon} size={20} color={Colors.danger} />
            )}
          </View>
        ) : null}
        <TextInput
          style={GlobalStyles.inputTextBox}
          selectionColor={Colors.primaryColor}
          autoCapitalize="none"
          placeholder={placeholder}
          placeholderTextColor={Colors.inputTextPlaceholder}
          keyboardType={keyboardType}
          secureTextEntry={secureText}
          value={value}
          onChangeText={onChangeHandler}
        />
        {secureIcon ? (
          <TouchableOpacity
            style={GlobalStyles.inputTextBoxIcon}
            onPress={toggleEyeIcon}>
            {hide ? (
              <Icon name={'eye'} size={20} color={Colors.inputTextIcon} />
            ) : (
              <Icon name={'eye-off'} size={20} color={Colors.inputTextIcon} />
            )}
          </TouchableOpacity>
        ) : null}
      </View>
      {!isValid && errorMessage ? (
        <View>
          <Text style={GlobalStyles.inputTextErrorMessage}>{errorMessage}</Text>
        </View>
      ) : null}
    </View>
  )
}

export default InputTextBox
