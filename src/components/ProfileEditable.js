import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import StatusDot from './StatusDot'
import { Colors, GlobalStyles } from '../styles'

const ProfileEditable = ({ user, onPressHandler }) => {
  const { email = '', nickName = '', status = false } = user

  return (
    <TouchableOpacity
      style={GlobalStyles.rowContainer}
      onPress={onPressHandler}>
      <View style={GlobalStyles.avatarIcon}>
        <Icon name="user" size={36} color={Colors.lightBg} solid />
        <StatusDot status={status} />
      </View>
      <View style={GlobalStyles.profileDescContainer}>
        <Text style={GlobalStyles.profileDescText}>{nickName}</Text>
        <Text style={GlobalStyles.profileDescTextSmall}>{email}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default ProfileEditable
