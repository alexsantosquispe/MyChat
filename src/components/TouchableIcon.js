import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Colors, GlobalStyles } from '../styles'

const TouchableIcon = ({ title, icon, onPressHandler }) => {
  return (
    <TouchableOpacity
      style={GlobalStyles.touchableContainer}
      onPress={onPressHandler}>
      <View style={GlobalStyles.iconWithBackground}>
        <Icon name={icon} size={20} color={Colors.inputTextIcon} />
      </View>
      <Text style={GlobalStyles.touchableText}>{title}</Text>
    </TouchableOpacity>
  )
}

export default TouchableIcon
