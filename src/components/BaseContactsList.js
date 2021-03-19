import React, { useState, useEffect, useContext } from 'react'
import { FlatList, View, Keyboard } from 'react-native'
import firestore from '@react-native-firebase/firestore'
import ContactItem from '../components/ContactItem'
import SearchBar from '../components/SearchBar'
import { USERS } from '../services/constants'
import { AuthContext } from '../navigation/AuthProvider'

const BaseContactsList = ({ hideSearchBar = false }) => {
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

  const keyExtractor = (item) => item.authId.toString()

  const renderItem = ({ item }) => <ContactItem user={item} />

  return (
    <View style={{ flex: 1 }}>
      {!hideSearchBar ? (
        <SearchBar
          placeholder="Search contact"
          value={searchText}
          onChangeTextHandler={onChangeSearchText}
          onClearHandler={onClearSearchBar}
        />
      ) : null}
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

export default BaseContactsList
