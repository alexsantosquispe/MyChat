import React, { PureComponent } from 'react'
import { View, Text, StatusBar } from 'react-native'
import {
  DismissKeyboard,
  InputTextBox,
  LinkText,
  ModalContent,
  RoundedButton,
  SocialButton
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
    this.toggleModal = this.toggleModal.bind(this)
    this.onChangeEmail = this.onChangeEmail.bind(this)
    this.onChangePassword = this.onChangePassword.bind(this)
    this.login = this.login.bind(this)
  }

  componentDidMount() {
    changeNavigationBarColor(Colors.lightBg, true)
  }

  goToSignUpScreen = () => {
    const { navigation } = this.props
    navigation.navigate(SIGNUP)
  }

  toggleModal = () => {
    const { modalVisibility, setModalVisibility } = this.props
    setModalVisibility(!modalVisibility)
  }

  onChangeEmail = (value) => {
    const { parameters, onChangeUser } = this.props
    onChangeUser({ ...parameters, email: value.trim() })
  }

  onChangePassword = (value) => {
    const { parameters, onChangeUser } = this.props
    onChangeUser({ ...parameters, password: value })
  }

  login = () => {
    const { parameters, signIn } = this.props
    signIn(parameters)
  }

  render() {
    const { user, parameters, loading, error, modalVisibility } = this.props
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
            value={parameters.email}
            keyboardType="email-address"
            onChangeHandler={this.onChangeEmail}
          />
          <InputTextBox
            icon="lock"
            placeholder="Enter password"
            secureTextEntry={true}
            secureIcon={true}
            value={parameters.password}
            onChangeHandler={this.onChangePassword}
          />
          {/* TODO: Complete forgot password */}
          {/* <Text style={GlobalStyles.forgotPassword}>Forgot password?</Text> */}
          <RoundedButton
            title="Login"
            onPressHandler={this.login}
            disabled={
              parameters.email.length === 0 || parameters.password.length === 0
            }
          />
          {/* TODO: Complete Google and Facebook sign in */}
          {/* <Text style={GlobalStyles.dividerText}>or</Text>
          <SocialButton
            title="Sign In with Google"
            type="google"
            onPressHandler={() => {}}
          />
          <SocialButton
            title="Sign In with Facebook"
            type="facebook"
            onPressHandler={() => {}}
          /> */}
          <View style={GlobalStyles.signUpSectionContainer}>
            <Text style={GlobalStyles.noAccount}>Don't have an account?</Text>
            <LinkText label="Register" onPressHandler={this.goToSignUpScreen} />
          </View>
          <ModalContent
            visibility={modalVisibility}
            loading={loading}
            success={user !== null}
            message={user === null ? error : null}
            negativeButtonTitle="Try again"
            negativeAction={this.toggleModal}
            type="error"
          />
        </View>
      </DismissKeyboard>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
  parameters: state.auth.parameters,
  loading: state.auth.loading,
  error: state.auth.error,
  modalVisibility: state.auth.modalVisibility
})

const mapDispatchToProps = (dispatch) => ({
  signIn: (user) => dispatch(AuthActions.signIn(user)),
  onChangeUser: (user) => dispatch(AuthActions.changeUser(user)),
  setModalVisibility: (visibility) =>
    dispatch(AuthActions.setModalVisibility(visibility))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
