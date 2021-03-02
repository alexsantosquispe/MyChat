import React, { PureComponent } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import * as SignUpActions from '../redux/actions/SignUp.action'
import {
  BackButton,
  DismissKeyboard,
  InputTextBox,
  LinkText,
  RoundedButton
} from '../components'
import { GlobalStyles } from '../styles'

class SignUpScreen extends PureComponent {
  constructor(props) {
    super(props)
    this.goBackLogin = this.goBackLogin.bind(this)
    this.onChangeEmail = this.onChangeEmail.bind(this)
    this.onChangePassword = this.onChangePassword.bind(this)
    this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this)
    this.register = this.register.bind(this)
  }

  goBackLogin = () => {
    const { navigation } = this.props
    navigation.goBack()
  }

  onChangeEmail = (value) => {
    const { user, onChangeUser } = this.props
    onChangeUser({ ...user, email: value })
  }

  onChangePassword = (value) => {
    const { user, onChangeUser } = this.props
    onChangeUser({ ...user, password: value })
  }

  onChangeConfirmPassword = (value) => {
    const { user, onChangeUser } = this.props
    onChangeUser({ ...user, repeatedPassword: value })
  }

  register = () => {
    const { user, signUp } = this.props
    signUp(user)
  }

  render() {
    const { user } = this.props
    return (
      <DismissKeyboard>
        <View style={GlobalStyles.container}>
          <BackButton onPressHandler={this.goBackLogin} />
          <View style={GlobalStyles.welcomeContainer}>
            <Text style={GlobalStyles.titleText}>Hello...!</Text>
            <Text style={GlobalStyles.subTitleText}>
              Let's create your account
            </Text>
          </View>
          {/* <InputTextBox
          icon="user"
          placeholder="Enter your name"
          value={name}
          onChangeHandler={(text) => setName(text)}
        /> */}
          <InputTextBox
            icon="mail"
            placeholder="Enter email"
            value={user.email}
            keyboardType="email-address"
            validationRules={['noEmpty', 'email']}
            onChangeHandler={this.onChangeEmail}
          />
          <InputTextBox
            icon="lock"
            placeholder="Enter password"
            secureTextEntry={true}
            value={user.password}
            validationRules={['noEmpty']}
            onChangeHandler={this.onChangePassword}
          />
          <InputTextBox
            icon="lock"
            placeholder="Confirm password"
            secureTextEntry={true}
            value={user.repeatedPassword}
            validationRules={['noEmpty']}
            onChangeHandler={this.onChangeConfirmPassword}
          />
          <RoundedButton
            title="Register"
            onPressHandler={this.register}
            disabled={
              user.email.length === 0 ||
              user.password.length === 0 ||
              user.repeatedPassword.length === 0
            }
          />
          <View style={GlobalStyles.signUpSectionContainer}>
            <Text style={GlobalStyles.noAccount}>Already have an account?</Text>
            <LinkText label="Login" onPressHandler={this.goBackLogin} />
          </View>
        </View>
      </DismissKeyboard>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.signUp.user
})

const mapDispatchToProps = (dispatch) => ({
  onChangeUser: (user) => dispatch(SignUpActions.changeNewUser(user)),
  signUp: (user) => dispatch(SignUpActions.signUp(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen)
