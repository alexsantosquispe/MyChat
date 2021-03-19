import React from 'react'
import { View, Text, Image } from 'react-native'
import * as Utils from '../utils'
import { GlobalStyles } from '../styles'

const CircleAvatar = ({ username, imageSrc, size = 48 }) => {
  const letter = username ? Utils.upperFirst(username)[0] : ''
  const avatarSize = { width: size, height: size, radius: size / 2 }

  return imageSrc ? (
    <View style={[GlobalStyles.contactAvatar, avatarSize]}>
      <Image
        style={GlobalStyles.contactImage}
        source={require('../../assets/avatar/male.png')}
      />
    </View>
  ) : username ? (
    <View style={[GlobalStyles.contactAvatar, avatarSize]}>
      <Text style={GlobalStyles.contactFirstLetter}>{letter}</Text>
    </View>
  ) : null
}

export default CircleAvatar
