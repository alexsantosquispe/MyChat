import React from 'react'
import { View, StatusBar } from 'react-native'
import { BaseContactsList, TouchableIcon } from '../components'
import { Colors, GlobalStyles } from '../styles'

const NewConversation = () => {
  return (
    <View style={[GlobalStyles.subContainer, { paddingTop: 8 }]}>
      <StatusBar backgroundColor={Colors.lightBg} barStyle="dark-content" />
      {/* <TouchableIcon
        icon="users"
        title="Create a new group"
        onPressHandler={() => {}}
      /> */}
      <BaseContactsList hideSearchBar={true} />
    </View>
  )
}

export default NewConversation
