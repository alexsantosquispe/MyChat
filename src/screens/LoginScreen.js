import React, { useState } from 'react'
import { View, Text } from 'react-native'
import {
  InputTextBox,
  LinkText,
  RoundedButton,
  SocialButton
} from '../components'
import { GlobalStyles } from '../styles'

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View style={GlobalStyles.container}>
      <View style={GlobalStyles.welcomeContainer}>
        <Text style={GlobalStyles.titleText}>Welcome Back!</Text>
        <Text style={GlobalStyles.subTitleText}>
          Good to see you again. You can continue where you left it
        </Text>
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
      {/* <Text style={GlobalStyles.forgotPassword}>Forgot password?</Text> */}
      <RoundedButton title="Login" onPressHandler={() => {}} />
      <Text style={GlobalStyles.dividerText}>or</Text>
      <SocialButton
        title="Sign In with Google"
        type="google"
        onPressHandler={() => {}}
      />
      <SocialButton
        title="Sign In with Facebook"
        type="facebook"
        onPressHandler={() => {}}
      />
      <View style={GlobalStyles.signUpSectionContainer}>
        <Text style={GlobalStyles.noAccount}>Don't have an account?</Text>
        <LinkText label="Register" onPressHandler={() => {}} />
      </View>
    </View>
  )
}

export default LoginScreen
