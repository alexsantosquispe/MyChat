import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { Colors, GlobalStyles } from '../styles'

const FloatButton = (props) => {
  const { icon, action, alignment = 'rigth' } = props
  const position = GlobalStyles[alignment] || {}

  return (
    <TouchableOpacity
      onPress={action}
      style={[GlobalStyles.floatButton, position]}>
      <Icon name={icon} size={28} color={Colors.lightBg} />
    </TouchableOpacity>
  )
}

export default FloatButton
