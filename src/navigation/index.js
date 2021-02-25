import React, { PureComponent } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { connect } from 'react-redux'
import * as AuthActions from '../redux/actions/Auth.action'
import AuthStack from './AuthStack'
import HomeStack from './HomeStack'

class RootNavigation extends PureComponent {
  componentDidMount() {
    const { signIn } = this.props
    signIn()
  }

  render() {
    const { authentication } = this.props
    const { user, loading, error } = authentication

    return (
      <NavigationContainer>
        {/* user ? <HomeStack /> : <AuthStack /> */}
        <AuthStack />
      </NavigationContainer>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authentication: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (email, password) => dispatch(AuthActions.signIn(email, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RootNavigation)
