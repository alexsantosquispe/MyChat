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
  welcomeContainer: { marginBottom: 32 },
  inputTextBoxContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.inputTextBg,
    borderRadius: 6,
    marginVertical: 4,
    alignItems: 'center',
    width: '100%'
  },
  inputTextBox: {
    width: '100%',
    fontSize: 17,
    fontFamily: 'Nunito-Regular'
  },
  inputTextBoxIcon: {
    paddingHorizontal: 8
  },
  button: {
    borderRadius: 6,
    backgroundColor: Colors.primaryColor,
    paddingVertical: 12,
    margin: 8,
    width: '100%',
    alignItems: 'center',
    elevation: 0
  },
  buttonTitle: {
    fontSize: 17,
    color: Colors.buttonTitle,
    fontFamily: 'Nunito-Bold'
  },
  titleText: {
    fontSize: 24,
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
    paddingTop: 8
  },
  noAccount: {
    fontSize: 17,
    fontFamily: 'Nunito-SemiBold',
    color: Colors.buttonTitleDark,
    paddingRight: 4
  },
  linkText: {
    fontSize: 17,
    fontFamily: 'Nunito-Bold',
    color: Colors.primaryColor
  }
})
