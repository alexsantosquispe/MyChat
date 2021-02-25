import React from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import { default as RootNavigation } from './src/navigation'
import { default as Store } from './src/redux/store/ConfigStore'
import { name as appName } from './app.json'

const RNComponent = () => {
  return (
    <Provider store={Store}>
      <RootNavigation />
    </Provider>
  )
}

AppRegistry.registerComponent(appName, () => RNComponent)
