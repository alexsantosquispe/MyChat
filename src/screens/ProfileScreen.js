import React, { PureComponent } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import * as SignOutActions from '../redux/actions/SignOut.action'
import * as ProfileActions from '../redux//actions/Profile.action'
import {
  ProfileButton,
  TouchableItem,
  WarningMessage,
  ModalContent
} from '../components'
import { EDIT_PROFILE, SETTINGS } from '../navigation/RoutesNames'
import { GlobalStyles } from '../styles'

class ProfileScreen extends PureComponent {
  constructor(props) {
    super(props)
    this.toggleModal = this.toggleModal.bind(this)
    this.goToSettingsScreen = this.goToSettingsScreen.bind(this)
    this.goToEditProfileScreen = this.goToEditProfileScreen.bind(this)
    this.confirmLogout = this.confirmLogout.bind(this)
    this.signOut = this.signOut.bind(this)
  }

  componentDidMount() {
    const { fetchCurrentUser } = this.props
    fetchCurrentUser()
  }

  toggleModal = () => {
    const { modalVisibility, setModalVisibility } = this.props
    setModalVisibility(!modalVisibility)
  }

  goToSettingsScreen = () => {
    const { navigation } = this.props
    navigation.navigate(SETTINGS)
  }

  goToEditProfileScreen = () => {
    const { navigation } = this.props
    navigation.navigate(EDIT_PROFILE)
  }

  signOut = () => {
    const { logout } = this.props
    logout()
  }

  confirmLogout = () => {
    this.toggleModal()
  }

  render() {
    const { user, loading, error, modalVisibility } = this.props
    return (
      <View style={GlobalStyles.subContainer}>
        <Text style={GlobalStyles.bigTitle}>My Profile</Text>
        <ProfileButton
          user={user}
          onPressHandler={this.goToEditProfileScreen}
        />
        {user.emailVerified ? (
          <WarningMessage message="Email not verified" />
        ) : null}
        <View style={{ marginTop: 8 }}>
          <TouchableItem
            title="Preferences"
            onPressHandler={this.goToSettingsScreen}
          />
          <TouchableItem title="Logout" onPressHandler={this.confirmLogout} />
          <TouchableItem
            title="About"
            onPressHandler={() => {
              console.log('Show about modal')
            }}
          />
        </View>
        <ModalContent
          visibility={modalVisibility}
          message="Are you sure you want logout?"
          positiveButtonTitle="Yes"
          negativeButtonTitle="No"
          positiveAction={this.signOut}
          negativeAction={this.toggleModal}
          success={false}
          type="info"
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.profile.user,
  loading: state.profile.loading,
  error: state.profile.error,
  modalVisibility: state.signOut.modalVisibility
})

const mapDispatchToProps = (dispatch) => ({
  fetchCurrentUser: () => dispatch(ProfileActions.fetchProfile()),
  logout: () => dispatch(SignOutActions.signOut()),
  setModalVisibility: (visibility) =>
    dispatch(SignOutActions.setModalVisibility(visibility))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)
