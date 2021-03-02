import React, { PureComponent } from 'react'
import { View, Text, StatusBar } from 'react-native'
import {
  InputTextBox,
  LinkText,
  RoundedButton,
  SocialButton,
  DismissKeyboard
} from '../components'
import { connect } from 'react-redux'
import changeNavigationBarColor from 'react-native-navigation-bar-color'
import * as AuthActions from '../redux/actions/Auth.action'
import { Colors, GlobalStyles } from '../styles'
import { SIGNUP } from '../navigation/RoutesNames'

class LoginScreen extends PureComponent {
  constructor(props) {
    super(props)
    this.goToSignUpScreen = this.goToSignUpScreen.bind(this)
    this.onChangeEmail = this.onChangeEmail.bind(this)
    this.onChangePassword = this.onChangePassword.bind(this)
    this.login = this.login.bind(this)
  }

  componentDidMount() {
    changeNavigationBarColor(Colors.lightBg)
  }

  goToSignUpScreen = () => {
    const { navigation } = this.props
    navigation.navigate(SIGNUP)
  }

  onChangeEmail = (value) => {
    const { user, onChangeUser } = this.props
    onChangeUser({ ...user, email: value.trim() })
  }

  onChangePassword = (value) => {
    const { user, onChangeUser } = this.props
    onChangeUser({ ...user, password: value })
  }

  login = () => {
    const { user, signIn } = this.props
    signIn(user)
  }

  render() {
    const { user = {} } = this.props
    return (
      <DismissKeyboard>
        <View style={GlobalStyles.container}>
          <StatusBar backgroundColor={Colors.lightBg} barStyle="dark-content" />
          <View style={GlobalStyles.welcomeContainer}>
            <Text style={GlobalStyles.titleText}>Welcome Back!</Text>
            <Text style={GlobalStyles.subTitleText}>
              Good to see you again. You can continue where you left it
            </Text>
          </View>
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
          {/* TODO: Complete forgot password */}
          {/* <Text style={GlobalStyles.forgotPassword}>Forgot password?</Text> */}
          <RoundedButton
            title="Login"
            onPressHandler={this.login}
            disabled={user.email.length === 0 || user.password.length === 0}
          />
          <Text style={GlobalStyles.dividerText}>or</Text>
          <SocialButton
            title="Sign In with Google"
            type="google"
            onPressHandler={() => {
              alert('SignIn with Google')
            }}
          />
          <SocialButton
            title="Sign In with Facebook"
            type="facebook"
            onPressHandler={() => {
              alert('SigIn with Facebook')
            }}
          />
          <View style={GlobalStyles.signUpSectionContainer}>
            <Text style={GlobalStyles.noAccount}>Don't have an account?</Text>
            <LinkText label="Register" onPressHandler={this.goToSignUpScreen} />
          </View>
        </View>
      </DismissKeyboard>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user
})

const mapDispatchToProps = (dispatch) => ({
  onChangeUser: (user) => dispatch(AuthActions.changeUser(user)),
  signIn: (user) => dispatch(AuthActions.signIn(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
