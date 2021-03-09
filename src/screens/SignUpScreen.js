import React, { PureComponent } from 'react'
import { View, Text, Keyboard } from 'react-native'
import { connect } from 'react-redux'
import * as SignUpActions from '../redux/actions/SignUp.action'
import {
  BackButton,
  DismissKeyboard,
  InputTextBox,
  LinkText,
  ModalContent,
  RoundedButton
} from '../components'
import { GlobalStyles } from '../styles'

class SignUpScreen extends PureComponent {
  constructor(props) {
    super(props)
    this.goBackLogin = this.goBackLogin.bind(this)
    this.toggleModal = this.toggleModal.bind(this)
    this.onChangeEmail = this.onChangeEmail.bind(this)
    this.onChangePassword = this.onChangePassword.bind(this)
    this.register = this.register.bind(this)
  }

  goBackLogin = () => {
    const { navigation } = this.props
    navigation.goBack()
  }

  toggleModal = () => {
    const { modalVisibility, setModalVisibility } = this.props
    setModalVisibility(!modalVisibility)
  }

  onChangeEmail = (value) => {
    const { parameters, onChangeParameters } = this.props
    onChangeParameters({ ...parameters, email: value })
  }

  onChangePassword = (value) => {
    const { parameters, onChangeParameters } = this.props
    onChangeParameters({ ...parameters, password: value })
  }

  register = () => {
    const { parameters, signUp } = this.props
    Keyboard.dismiss()
    signUp(parameters)
  }

  render() {
    const { user, parameters, loading, error, modalVisibility } = this.props
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
          <RoundedButton
            title="Register"
            onPressHandler={this.register}
            disabled={
              parameters.email.length === 0 || parameters.password.length === 0
            }
          />
          <View style={GlobalStyles.signUpSectionContainer}>
            <Text style={GlobalStyles.noAccount}>Already have an account?</Text>
            <LinkText label="Login" onPressHandler={this.goBackLogin} />
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
  user: state.signUp.user,
  parameters: state.signUp.parameters,
  loading: state.signUp.loading,
  error: state.signUp.error,
  modalVisibility: state.signUp.modalVisibility
})

const mapDispatchToProps = (dispatch) => ({
  signUp: (user) => dispatch(SignUpActions.signUp(user)),
  onChangeParameters: (user) => dispatch(SignUpActions.changeNewUser(user)),
  setModalVisibility: (visibility) =>
    dispatch(SignUpActions.setModalVisibility(visibility))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen)
