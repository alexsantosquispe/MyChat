import React from 'react'
import { View, Text } from 'react-native'
import CircleAvatar from './CircleAvatar'
import { GlobalStyles } from '../styles'

const ChatItem = (props) => {
  const { username, lastMessage, time, badge } = props
  return (
    <View style={GlobalStyles.chatItemContainer}>
      <CircleAvatar username={username} />
      <View style={GlobalStyles.chatItemContent}>
        <Text style={GlobalStyles.chatItemTitle}>{username}</Text>
        {badge > 0 ? (
          <Text style={GlobalStyles.chatItemSubTitleActive}>{lastMessage}</Text>
        ) : (
          <Text style={GlobalStyles.chatItemSubTitle}>{lastMessage}</Text>
        )}
      </View>
      <View style={GlobalStyles.chatItemTimeDesc}>
        <Text style={GlobalStyles.chatItemTime}>{time}</Text>
        {badge > 0 ? (
          <View style={GlobalStyles.badge}>
            <Text style={GlobalStyles.badgeText}>{badge}</Text>
          </View>
        ) : null}
      </View>
    </View>
  )
}

export default ChatItem
