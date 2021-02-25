import React from 'react'
import { View, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { Colors, GlobalStyles } from '../styles'

const InputTextBox = (props) => {
  const {
    icon,
    value,
    placeholder,
    secureTextEntry = false,
    onChangeHandler
  } = props

  return (
    <View style={GlobalStyles.inputTextBoxContainer}>
      {icon ? (
        <View style={GlobalStyles.inputTextBoxIcon}>
          <Icon name={icon} size={20} color={Colors.inputTextIcon} />
        </View>
      ) : null}
      <TextInput
        style={GlobalStyles.inputTextBox}
        selectionColor={Colors.primaryColor}
        autoCapitalize="none"
        placeholder={placeholder}
        placeholderTextColor={Colors.inputTextPlaceholder}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeHandler}
      />
    </View>
  )
}

export default InputTextBox
