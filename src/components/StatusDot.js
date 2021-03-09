import React from 'react'
import { View } from 'react-native'
import { Colors, GlobalStyles } from '../styles'

const StatusDot = ({ status }) => {
  return status ? (
    <View
      style={[GlobalStyles.statusDot, { backgroundColor: Colors.success }]}
    />
  ) : (
    <View
      style={[GlobalStyles.statusDot, { backgroundColor: Colors.danger }]}
    />
  )
}

export default StatusDot
