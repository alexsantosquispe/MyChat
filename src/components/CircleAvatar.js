import React from 'react'
import { View, Text, Image } from 'react-native'
import * as Utils from '../utils'
import { Colors, GlobalStyles } from '../styles'

const CircleAvatar = ({ username, imageSrc }) => {
  const letter = username ? Utils.upperFirst(username)[0] : ''
  return imageSrc ? (
    <View style={GlobalStyles.contactAvatar}>
      <Image
        style={GlobalStyles.contactImage}
        source={require('../../assets/avatar/male.png')}
      />
    </View>
  ) : (
    <View
      style={[
        GlobalStyles.contactAvatar,
        { backgroundColor: Utils.getRandomColor() }
      ]}>
      <Text style={GlobalStyles.contactFirstLetter}>{letter}</Text>
    </View>
  )
}

export default CircleAvatar
