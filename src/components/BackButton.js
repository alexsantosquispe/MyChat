import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { Colors, GlobalStyles } from '../styles'

const BackButton = (props) => {
  const { onPressHandler } = props
  return (
    <TouchableOpacity style={GlobalStyles.backButton} onPress={onPressHandler}>
      <Icon name="arrow-left" size={26} color={Colors.primaryColor} />
    </TouchableOpacity>
  )
}

export default BackButton
