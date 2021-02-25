import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { InputTextBox, RoundedButton } from '../components'
import { GlobalStyles } from '../styles'

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordRepeated, setPasswordRepeated] = useState('')

  return (
    <View style={GlobalStyles.container}>
      <View style={GlobalStyles.welcomeContainer}>
        <Text style={GlobalStyles.titleText}>Hello...!</Text>
        <Text style={GlobalStyles.subTitleText}>Let's create your account</Text>
      </View>
      <InputTextBox
        icon="mail"
        placeholder="Enter email"
        value={email}
        onChangeHandler={(text) => setEmail(text)}
      />
      <InputTextBox
        icon="lock"
        placeholder="Enter password"
        secureTextEntry={true}
        value={password}
        onChangeHandler={(text) => setPassword(text)}
      />
      <InputTextBox
        icon="lock"
        placeholder="Repeat password"
        secureTextEntry={true}
        value={passwordRepeated}
        onChangeHandler={(text) => setPasswordRepeated(text)}
      />
      <RoundedButton title="Sign Up" onPressHandler={() => {}} />
    </View>
  )
}

export default LoginScreen
