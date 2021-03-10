import React from 'react'
import { View, TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { Colors, GlobalStyles } from '../styles'

const SearchBar = (props) => {
  const { value, placeholder, onChangeTextHandler, onClearHandler } = props

  return (
    <View style={GlobalStyles.inputTextBoxContainer}>
      <View style={[GlobalStyles.inputTextBoxRow]}>
        <View style={GlobalStyles.inputTextBoxIcon}>
          <Icon name="search" size={20} color={Colors.inputTextIcon} />
        </View>
        <TextInput
          style={GlobalStyles.inputTextBox}
          selectionColor={Colors.primaryColor}
          autoCapitalize="none"
          returnKeyType="search"
          placeholder={placeholder}
          placeholderTextColor={Colors.inputTextPlaceholder}
          value={value}
          onChangeText={onChangeTextHandler}
        />
        {value && value.length > 0 ? (
          <TouchableOpacity
            style={GlobalStyles.clearSearchBar}
            onPress={onClearHandler}>
            <Icon name="x" size={20} color={Colors.inputTextIcon} />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  )
}

export default SearchBar
