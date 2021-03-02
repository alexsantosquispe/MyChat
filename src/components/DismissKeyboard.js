import React from 'react'
import { TouchableWithoutFeedback, Keyboard } from 'react-native'

const DismissKeyboard = ({ children }) => {
  const dismissKeyboard = () => {
    Keyboard.dismiss()
  }
  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      {children}
    </TouchableWithoutFeedback>
  )
}

export default DismissKeyboard
