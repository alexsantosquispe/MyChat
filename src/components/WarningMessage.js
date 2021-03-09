import React from 'react'
import { View, Text } from 'react-native'
import { GlobalStyles } from '../styles'

const WarningMessage = (props) => {
  const { message } = props
  return (
    <View style={GlobalStyles.warnignMessage}>
      <Text style={GlobalStyles.warningMessageText}>{message}</Text>
    </View>
  )
}

export default WarningMessage
