import { StyleSheet } from 'react-native'
import { Colors } from './Colors'

export const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 36,
    paddingVertical: 16,
    backgroundColor: Colors.lightBg
  },
  welcomeContainer: {
    marginBottom: 36
  },
  inputTextBoxContainer: {
    marginVertical: 5
  },
  inputTextBoxRow: {
    flexDirection: 'row',
    backgroundColor: Colors.inputTextBg,
    borderRadius: 6,
    alignItems: 'center',
    width: '100%'
  },
  inputTextBoxError: {
    borderWidth: 2,
    borderColor: Colors.danger
  },
  inputTextErrorMessage: {
    color: Colors.danger,
    fontFamily: 'Nunito-SemiBold',
    fontSize: 13
  },
  inputTextBox: {
    flex: 1,
    fontSize: 17,
    fontFamily: 'Nunito-Regular'
  },
  inputTextBoxIcon: {
    paddingHorizontal: 8
  },
  baseButton: {
    borderRadius: 6,
    backgroundColor: Colors.primaryColor,
    paddingVertical: 12,
    margin: 8,
    width: '100%',
    alignItems: 'center',
    elevation: 0
  },
  button: {
    backgroundColor: Colors.primaryColor
  },
  buttonDisabled: {
    backgroundColor: Colors.secondColor
  },
  buttonTitle: {
    fontSize: 17,
    color: Colors.buttonTitle,
    fontFamily: 'Nunito-Bold'
  },
  titleText: {
    fontSize: 26,
    fontFamily: 'Nunito-Bold',
    alignSelf: 'flex-start'
  },
  subTitleText: {
    fontSize: 22,
    fontFamily: 'Nunito-Light',
    paddingVertical: 8
  },
  dividerText: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 17,
    paddingVertical: 16
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    color: Colors.inputTextPlaceholder,
    fontFamily: 'Nunito-SemiBold',
    fontSize: 16,
    marginBottom: 16
  },
  outLineButton: {
    width: '100%',
    backgroundColor: Colors.lightBg,
    justifyContent: 'center',
    paddingVertical: 12,
    borderWidth: 1.5,
    borderRadius: 6,
    margin: 8,
    borderColor: Colors.inputTextPlaceholder
  },
  iconContainer: {
    width: 40,
    alignItems: 'flex-end',
    marginBottom: -24
  },
  outLineButtonIcon: {
    width: 24,
    height: 24
  },
  titleContainer: {
    alignItems: 'center'
  },
  outLineButtonTitle: {
    fontSize: 17,
    color: Colors.buttonTitleDark,
    fontFamily: 'Nunito-Bold'
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 16,
    alignSelf: 'center'
  },
  signUpSectionContainer: {
    flexDirection: 'row',
    marginTop: 16
  },
  noAccount: {
    fontSize: 17,
    fontFamily: 'Nunito-SemiBold',
    color: Colors.buttonTitleDark,
    paddingRight: 4,
    paddingVertical: 8
  },
  linkContainer: {
    paddingVertical: 8
  },
  linkText: {
    fontSize: 17,
    fontFamily: 'Nunito-Bold',
    color: Colors.primaryColor
  },
  backButton: {
    top: 0,
    left: 36,
    justifyContent: 'center',
    position: 'absolute',
    height: 64,
    width: 64
  }
})
