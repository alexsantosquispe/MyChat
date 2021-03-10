import React, { useState, useEffect, useContext } from 'react'
import { FlatList, View, Text, StatusBar, Keyboard } from 'react-native'
import firestore from '@react-native-firebase/firestore'
import changeNavigationBarColor from 'react-native-navigation-bar-color'
import { ContactItem, SearchBar } from '../components'
import { USERS } from '../services/constants'
import { AuthContext } from '../navigation/AuthProvider'
import { Colors, GlobalStyles } from '../styles'

changeNavigationBarColor(Colors.lightBg, true)

const ContactsScreen = () => {
  const { user } = useContext(AuthContext)
  const [contacts, setContacts] = useState([])
  const [searchText, setSearchText] = useState('')
  const [filtered, setFiltered] = useState([])

  useEffect(() => {
    const susbscribe = firestore()
      .collection(USERS)
      .orderBy('nickName', 'asc')
      .onSnapshot((querySnapshot) => {
        const users = querySnapshot.docs.map((documentSnapshot) => {
          return {
            ...documentSnapshot.data()
          }
        })
        const result = users.filter((document) => document.authId !== user.uid)
        setContacts(result)
        setFiltered(result)
      })
    return susbscribe
  }, [])

  const onChangeSearchText = (text) => {
    setSearchText(text)
    if (text) {
      const result = contacts.filter((item) =>
        item.nickName.toLowerCase().includes(text)
      )
      setFiltered(result)
    }
  }

  const onClearSearchBar = () => {
    setSearchText('')
    setFiltered(contacts)
    Keyboard.dismiss()
  }

  const keyExtractor = (item) => item.authId

  const renderItem = ({ item }) => <ContactItem user={item} />

  return (
    <View style={GlobalStyles.subContainer}>
      <StatusBar backgroundColor={Colors.statusBar} barStyle="dark-content" />
      <Text style={GlobalStyles.bigTitle}>Contacts</Text>
      <SearchBar
        placeholder="Search"
        value={searchText}
        onChangeTextHandler={onChangeSearchText}
        onClearHandler={onClearSearchBar}
      />
      <View style={{ flex: 1 }}>
        <FlatList
          data={filtered}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  )
}

export default ContactsScreen
