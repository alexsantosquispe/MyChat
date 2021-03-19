import React, { useState } from 'react'
import { View, Text, StatusBar, FlatList } from 'react-native'
import changeNavigationBarColor from 'react-native-navigation-bar-color'
import { NEW_CHAT } from '../navigation/RoutesNames'
import { FloatButton, SearchBar, ChatItem } from '../components'
import { Colors, GlobalStyles } from '../styles'

changeNavigationBarColor(Colors.lightBg, true)

const HomeScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('')
  const [messages, setMessages] = useState([
    {
      _id: 1,
      username: 'Alex Santos',
      lastMessage: 'This section display the last message',
      time: '12:45',
      badge: 1
    },
    {
      _id: 2,
      username: 'Alex Santos',
      lastMessage: 'This section display a message, but very very long',
      time: 'Yesterday',
      badge: 0
    },
    {
      _id: 3,
      username: 'Alex Santos',
      lastMessage: 'This section display the last message',
      time: 'Dic 12',
      badge: 12
    },
    {
      _id: 4,
      username: 'Alex Santos',
      lastMessage: 'This section display the last message',
      time: '10:00',
      badge: 0
    }
  ])

  const newChat = () => {
    navigation.navigate(NEW_CHAT)
  }

  const renderItem = ({ item }) => {
    const { username, lastMessage, time, badge } = item
    return (
      <ChatItem
        username={username}
        lastMessage={lastMessage}
        time={time}
        badge={badge}
      />
    )
  }

  const renderSeparator = () => {
    return (
      <View
        style={{
          backgroundColor: Colors.grayBg,
          height: 1,
          alignSelf: 'flex-end',
          width: '80%'
        }}
      />
    )
  }

  const keyExtractor = (item) => {
    return item._id.toString()
  }

  return (
    <View style={GlobalStyles.subContainer}>
      <StatusBar backgroundColor={Colors.lightBg} barStyle="dark-content" />
      <Text style={GlobalStyles.bigTitle}>Messages</Text>
      <SearchBar
        placeholder="Search message"
        value={searchText}
        onChangeTextHandler={() => {}}
        onClearHandler={() => {}}
      />
      <View style={{ flex: 1 }}>
        <FlatList
          data={messages}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          ItemSeparatorComponent={renderSeparator}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <FloatButton icon="plus" action={newChat} alignment="right" />
    </View>
  )
}

export default HomeScreen
