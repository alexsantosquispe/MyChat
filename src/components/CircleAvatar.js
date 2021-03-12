import React from 'react'
import { View, Text, Image } from 'react-native'
import * as Utils from '../utils'
import { GlobalStyles } from '../styles'

const CircleAvatar = ({ username, imageSrc }) => {
  const letter = username ? Utils.upperFirst(username)[0] : ''

  return imageSrc ? (
    <View style={GlobalStyles.contactAvatar}>
      <Image
        style={GlobalStyles.contactImage}
        source={require('../../assets/avatar/male.png')}
      />
    </View>
  ) : username ? (
    <View style={GlobalStyles.contactAvatar}>
      <Text style={GlobalStyles.contactFirstLetter}>{letter}</Text>
    </View>
  ) : null
}

export default CircleAvatar
