import React, { PureComponent } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MainStack from './MainStack'

class RootNavigation extends PureComponent {
  render() {
    return (
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    )
  }
}

export default RootNavigation
