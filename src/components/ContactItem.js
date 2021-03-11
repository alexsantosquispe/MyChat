import React from 'react'
import { View, Text } from 'react-native'
import CircleAvatar from './CircleAvatar'
import { GlobalStyles } from '../styles'

const ContactItem = ({ user }) => {
  return user ? (
    <View style={GlobalStyles.contactItemContainer}>
      <CircleAvatar username={user.nickName} imageSrc={''} />
      <View>
        <Text style={GlobalStyles.contactItemTitle}>{user.nickName}</Text>
        <Text style={GlobalStyles.contactItemSubTitle}>{user.email}</Text>
      </View>
    </View>
  ) : null
}

export default ContactItem
