import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { Colors, GlobalStyles } from '../styles'

const TouchableItem = (props) => {
  const { title, onPressHandler } = props
  return (
    <TouchableOpacity
      onPress={onPressHandler}
      style={[
        GlobalStyles.rowContainer,
        GlobalStyles.profileItem,
        GlobalStyles.profileItemSpace
      ]}>
      <Text style={GlobalStyles.profileItemText}>{title}</Text>
      <View style={GlobalStyles.profileItemIcon}>
        <Icon name="chevron-right" size={24} color={Colors.darkBg} />
      </View>
    </TouchableOpacity>
  )
}

export default TouchableItem
